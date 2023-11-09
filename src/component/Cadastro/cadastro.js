import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { useState, useEffect } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';

//import Collection from '../../services/routes/Collection';
import { auth, provider } from "../../services/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import {collection,getDocs,addDoc,updateDoc,deleteDoc,doc,} from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const Cadastro = ({ nav, fechar }) => {

    const [newEmail, setEmail] = useState("");
    const [newNome, setNome] = useState("");
    const [newSenha, setSenha] = useState("");
    const [newCSenha, setCSenha] = useState("");


    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection (db,"users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { email: newEmail ,name: newNome, senha: String(newSenha), confirmsenha: String(newCSenha) });
  };

  const updateUser = async (id, senha) => {
    const userDoc = doc(db, "users", id);
    const newFields = { senha: senha==senha};
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [usersCollectionRef]);

    return (
        <View style={IndexStyle.contentLogin}>
            <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>

            <Text style={IndexStyle.textTopo}>Cadastro</Text>

            <Formulario
                espaço='Nome'
                secureTextEntry={false}
                valor={newNome}
                onChangeText={(newNome) => setNome(newNome)
                }
            />

            <Formulario
                espaço='Email'
                valor={newEmail}
                secureTextEntry={false}
                onChangeText={(newEmail) => setEmail(newEmail)}
        
            />
            <Formulario
                espaço='Senha'
                valor={newSenha}
                secureTextEntry={false}
                onChangeText={(newSenha) => setSenha(newSenha)}
                
            />

            <Formulario
                espaço='Repita sua Senha'
                secureTextEntry={false}
                valor={newCSenha}
                onChangeText={(newCSenha) => setCSenha(newCSenha)
                }
            />

            <Pressable style={IndexStyle.button} >
            <Text onClick={createUser}> Criar Usuario </Text>
            </Pressable>

            <Text style={IndexStyle.textIcon}>Se cadastre com</Text>

            <View style={IndexStyle.logos}>
                <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx} onPress={() => { loginWithGoogle }} />
                </Pressable>

                <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx} onPress={() => { loginWithGoogle }} />
                </Pressable>

                <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx} />
                </Pressable>
            </View>
        </View>
    )
};

export default Cadastro;

