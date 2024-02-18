// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { configDotenv } from "dotenv";
configDotenv();

const firebaseConfig = {
  apiKey: "AIzaSyC49B1dQyLzMGXeVQZJRdirvTQyesXDMvo",
  authDomain: "co-lab-69.firebaseapp.com",
  databaseURL: "https://co-lab-69-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "co-lab-69",
  storageBucket: "co-lab-69.appspot.com",
  messagingSenderId: "840146316628",
  appId: "1:840146316628:web:9c4ca0ce5a209db475acc1",
  measurementId: "G-NWMT8EMDQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FBauth = getAuth(app);
export const FBdatabase = getDatabase(app);