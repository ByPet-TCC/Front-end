// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence, signOut } from 'firebase/auth'
import { getFirestore, collection, getDocs, addDoc} from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage'
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO_Yrwl99xiIh4igO-vs3Qf0Yzd2F1-ls",
  authDomain: "bypet-api.firebaseapp.com",
  projectId: "bypet-api",
  storageBucket: "bypet-api.appspot.com",
  messagingSenderId: "686837097203",
  appId: "1:686837097203:web:44c12ac560d31cd5684d86",
  measurementId: "G-LS2W4CMKE7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{ 
  persistence:
getReactNativePersistence(AsyncStorage) }
  )
export const db = getFirestore(app);

export const storage = getStorage(app);
