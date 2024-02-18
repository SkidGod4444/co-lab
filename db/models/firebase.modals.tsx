
import { useEffect, useState } from "react";
import { User as FirebaseUser, GithubAuthProvider, getAdditionalUserInfo, getAuth, getRedirectResult, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { FBauth, FBdatabase } from "../firebase.config";
import { toast } from "sonner";
import { TeamSchema, UserSchema } from "../firebase.schema";
import { child, get, ref, set, equalTo, query, orderByChild, onValue } from "firebase/database";

export function useUser(): FirebaseUser | null {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // store in local storage in boolean form
      if (user) {
        localStorage.setItem('user', 'true');
        writeUserData({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          gitToken: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } else {
        localStorage.setItem('user', 'false');
      }
      setCurrentUser(user);
    });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  });

  return currentUser;
}


export function signInWithGitHub() {
  const provider = new GithubAuthProvider();
  provider.addScope('read:user');
  provider.addScope('read:project');
  provider.addScope('read:discussion');
  provider.addScope('repo_deployment');
  provider.addScope('repo');
  provider.addScope('repo:invite');
  signInWithRedirect(FBauth, provider)
    .then((result) => {
      const details = getAdditionalUserInfo(result);
      localStorage.setItem('gitResult', result);
      localStorage.setItem('gitDetails', JSON.stringify(details)); // Convert details to a string
    })
    .catch((error) => {
      throw error;
    });

}

export function SignOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      toast("You have been logged out!", {
        description: "You have limited access to the app now. Please login to continue.",
      });
      window.location.replace("/");
    })
    .catch((error) => {
      // An error happened.
    });
}

export async function writeUserData({
  id,
  name,
  email,
  gitToken,
  createdAt,
  updatedAt,
}: UserSchema) {
  const ifUser = await checkIfUserExists(email);
  if (ifUser) {
    console.log("User already exists");
    return;
  }
  try {
    set(ref(FBdatabase, "Users/" + id), {
      name: name,
      email: email,
      accessToken: gitToken,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
  } catch (error) {
    console.error("Error writing user data:", error);
    throw error; // Propagate the error
  }
}

export async function checkIfUserExists(email: string | null): Promise<boolean> {
  try {
    const snapshot = await get(child(ref(FBdatabase), "Users"));
    
    if (snapshot.exists()) {
      const users = snapshot.val();
      // Check if any user email matches the provided email
      for (const userId in users) {
        if (Object.prototype.hasOwnProperty.call(users, userId)) {
          if (users[userId].email === email) {
            return true; // Email exists
          }
        }
      }
    }

    return false; // Email does not exist
  } catch (error) {
    console.error("Error checking user email:", error);
    throw error; // Propagate the error
  }
}

export function getUserAccessToken (){
  const user = getAuth().currentUser;
  if (user) {
    console.log(user);
  }
  return null;
}

// export async function updateUserGitToken() {
//   const user = getAuth().currentUser;
//   if (user) {
//     const result = await signInWithGitHub();
//     const credential = GithubAuthProvider.credentialFromResult(result);
//     if (credential) {
//       const token = credential.accessToken;
//       if (token) {
//       const id = user.uid;
//       set(ref(FBdatabase, "Users/" + id), {
//         accessToken: token,
//       });
//   }
// }}}

export async function checkUserAccessToken(): Promise<boolean> {
  const user = getAuth().currentUser;
  if (user) {
    const id = user.uid;
    const userRef = ref(FBdatabase, "Users/" + id);
    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.accessToken === "") {
          return false;
        }
        return true;
      }
    } catch (error) {
      console.error("Error getting user data:", error);
      throw error;
    }
  }
  return false;
}

export async function writeTeamData({
  id,
  name,
  teamOwner,
  createdAt,
  updatedAt,
}: TeamSchema) {
  try {
    set(ref(FBdatabase, "Teams/" + id), {
      name: name,
      teamOwner: teamOwner,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
  } catch (error) {
    console.error("Error writing user data:", error);
    throw error; // Propagate the error
  }
}


export async function getTeamsByTeamOwnerId(ownerId: string, onData: (teamIds: string[] | null) => void) {
  const user = getAuth().currentUser;
  if (user) {
    const teamsRef = ref(FBdatabase, 'Teams');
    const teamsQuery = query(teamsRef, orderByChild('teamOwner'), equalTo(ownerId));

    // Set up a listener to fetch updates
    const teamsListener = onValue(teamsQuery, (snapshot) => {
      if (snapshot.exists()) {
        const teams = snapshot.val();
        const teamIds = Object.keys(teams || {}); // Get the IDs of teams
        onData(teamIds); // Callback to handle team IDs
      } else {
        onData(null); // No teams found for the owner ID
      }
    });

    // Return the listener function to allow cleanup
    return () => {
      teamsListener(); // Detach the listener when no longer needed
    };
  }
  
  throw new Error('User not authenticated');
}

export function deleteTeamById (teamId: string) {
  const teamRef = ref(FBdatabase, 'Teams/' + teamId);
  try {
    set(teamRef, null);
  } catch (error) {
    console.error('Error deleting team by ID:', error);
    throw error; // Propagate the error
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const randomIntGen = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    const length = 20;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };
 