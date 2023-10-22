import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD2gzgBos19WdkaMgBRPNMr_SytZh_3Ero",
  authDomain: "by-pet-native.firebaseapp.com",
  projectId: "by-pet-native",
  storageBucket: "by-pet-native.appspot.com",
  messagingSenderId: "766217528639",
  appId: "1:766217528639:web:1a332ef0ebb91b0369df8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db, getAuth};
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();