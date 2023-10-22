import { useState, useEffect } from "react";
import "./App.css";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Collection() {
  const [newName, setNewName] = useState("");
  const [newEmail, setEmail] = useState(0);
  const [newSenha, setSenha] = useState("");
  const [newCSenha, setCSenha] = useState("");

  const [user, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user");

//Criação de usuario, ultilizando a biblioteca do firestore 

const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, email: String(newEmail), senha: String(newSenha), Confirmsenha: String(newCSenha) });
  };

// Atualizando cadastro


  const updateUser = async (id, email, senha) => {
    const userDoc = doc(db, "users", id);
    const newFields = { email: email+ 1 };
    await updateDoc(userDoc, newFields);
  };

// Deletando cadastro

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

// Usando e Redirecionando dados especificos.


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

}
  export default Collection;
