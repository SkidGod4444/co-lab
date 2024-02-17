// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { configDotenv } from "dotenv";
configDotenv();

const firebaseConfig = {
  apiKey: process.env.apiKey || "AIzaSyC49B1dQyLzMGXeVQZJRdirvTQyesXDMvo",
  authDomain: process.env.authDomain || "co-lab-69.firebaseapp.com",
  projectId: process.env.projectId || "co-lab-69",
  storageBucket: process.env.srorageBucket || "co-lab-69.appspot.com",
  messagingSenderId: process.env.messagingSenderId || "840146316628",
  appId: process.env.appId || "1:840146316628:web:9c4ca0ce5a209db475acc1",
  measurementId: process.env.measurementId || "G-NWMT8EMDQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FBauth = getAuth(app);
export const FBdatabase = getDatabase(app);