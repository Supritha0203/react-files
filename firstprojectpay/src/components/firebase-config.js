
import { initializeApp } from "firebase/app";

import { getAuth,GoogleAuthProvider  } from "firebase/auth";

import { getDatabase } from "firebase/database";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyCMo2bEwXD4C1b-tmm8nH-_RSxiRQCJ1Uo",
  authDomain: "first-react-3f95d.firebaseapp.com",
  projectId: "first-react-3f95d",
  storageBucket: "first-react-3f95d.appspot.com",
  messagingSenderId: "618527647853",
  appId: "1:618527647853:web:adf238f7a6bebaaab0f764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);
export const fire= getFirestore(app);
export const storage= getStorage(app);

