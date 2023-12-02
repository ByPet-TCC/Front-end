// Importando as funções necessárias dos SDKs que você precisa
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence, signOut } from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Sua configuração do aplicativo web Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDO_Yrwl99xiIh4igO-vs3Qf0Yzd2F1-ls",
  authDomain: "bypet-api.firebaseapp.com",
  projectId: "bypet-api",
  storageBucket: "bypet-api.appspot.com",
  messagingSenderId: "686837097203",
  appId: "1:686837097203:web:44c12ac560d31cd5684d86",
  measurementId: "G-LS2W4CMKE7",
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando a autenticação e definindo a persistência
export const auth = initializeAuth(app, { 
  persistence: getReactNativePersistence(AsyncStorage) 
});

// Inicializando o Firestore
export const db = getFirestore(app);

// Inicializando o Storage
export const storage = getStorage(app);
