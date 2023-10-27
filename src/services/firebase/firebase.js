import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA4xxkiy-BPxH8PYpNPILKqlcUONegFtqQ",
  authDomain: "by-pet-api.firebaseapp.com",
  databaseURL: "https://by-pet-api-default-rtdb.firebaseio.com",
  projectId: "by-pet-api",
  storageBucket: "by-pet-api.appspot.com",
  messagingSenderId: "736920597440",
  appId: "1:736920597440:web:d1bb6570cb425666304e25",
  measurementId: "G-021F8Z85E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db, getAuth};
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();