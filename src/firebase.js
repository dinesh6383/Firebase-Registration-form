import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyA3x7eqybyNx-1Z_4JrnCUPoT-PAfIwPO8",
  authDomain: "form-registration-6255d.firebaseapp.com",
  projectId: "form-registration-6255d",
  storageBucket: "form-registration-6255d.appspot.com",
  messagingSenderId: "1000397779145",
  appId: "1:1000397779145:web:07ee0fe7e9dc7388c31d18",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default db;

export function googleSignUp() {
  return signInWithPopup(auth, provider);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => setCurrentUser(user));
  }, []);

  return currentUser;
}
