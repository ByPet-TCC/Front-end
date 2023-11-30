import React from 'react';
import { Text, View, TouchableOpacity, Image, Pressable, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { auth, db } from '../../services/firebase/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile} from "firebase/auth";

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import { doc, setDoc } from 'firebase/firestore/lite';

function Cadastro ({ fechar }) {
    const navigation = useNavigation('');

    const [novoNome, setNovoNome] = useState ("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha1, setSenha1] = useState("");

    const [visivel, setVisivel] = useState(true)

    async function cadastrar() {
        if(novoNome === '' || email === '' || senha === '' || senha1 === '') {
            alert ('É preciso preencher todos os campos!')
            return;
        }
        if (senha !== senha1) {
            alert ("As senhas não são iguais.")
            return;
        } else {  
            createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // O usuário foi criado e está logado.
                const user = userCredential.user;

                // Armazene as informações do usuário no Firestore.
                setDoc(doc(db, 'users', user.uid), {
                name: novoNome,
                email: email,
                });
                navigation.navigate('Home')
            })
            .catch((error) => {
                // Trate quaisquer erros aqui.
                console.error(error);
            }); 
        }
    }

    

    return (
        <View style={IndexStyle.contentLogin}>
            <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>

            <Text style={IndexStyle.textTopo}>Cadastro</Text>

            <Formulario
                espaço='Nome'
                onChangeText={(novoNome) => setNovoNome(novoNome)}
                valor={novoNome}
            />
               
            <Formulario
                espaço='E-mail'
                tipo= 'email-address'
                onChangeText={(email) => setEmail(email)}
                valor={email}
            />
            <Formulario
                espaço ='Senha'
                onChangeText={(senha) => setSenha(senha)}
                valor={senha}
                senha={visivel}
            />

            <Formulario
                espaço='Repita a sua senha'
                onChangeText={(senha1) => setSenha1(senha1)}
                valor={senha1}
                senha={visivel}
            />
            
            <Pressable onPress={() => setVisivel(!visivel)} style={IndexStyle.bVisivel}>
                {visivel === false ? <Text style={IndexStyle.visiv}>Senha não visivel</Text> : <Text style={IndexStyle.visiv}>Senha visivel</Text>}
            </Pressable>

            <TouchableOpacity style={IndexStyle.button} onPress={() => {cadastrar()}} onPressOut={fechar}>
                <Text style={IndexStyle.textBtn}>Cadastro</Text>
            </TouchableOpacity>

            <Text style={IndexStyle.textIcon}>Se cadastre com</Text>

            <View style={IndexStyle.logos}>
                {/* <TouchableOpacity>
                    <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx} />
                </TouchableOpacity> */}

                <TouchableOpacity>
                    <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx} />
                </TouchableOpacity>

                {/* <TouchableOpacity>
                    <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx} />
                </TouchableOpacity> */}
            </View>
        </View>
    )
};

export default Cadastro;
