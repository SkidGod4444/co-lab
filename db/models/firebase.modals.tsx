import { useEffect, useState } from "react";
import { User as FirebaseUser, GithubAuthProvider, getAuth, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { FBauth } from "../firebase.config";

export function useUser(): FirebaseUser | null {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // store in local storage in boolean form
      if (user) {
        localStorage.setItem('user', 'true');
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
  signInWithRedirect(FBauth, provider);
}

export function SignOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      window.location.replace("/");
        // toast({
        //     title: "Signed out",
        //     description: "You have limited access now!",
        //   })
    })
    .catch((error) => {
      // An error happened.
    });
}