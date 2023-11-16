// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

export default firebaseConfig;