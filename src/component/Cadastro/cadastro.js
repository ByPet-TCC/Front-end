import React from 'react';
import { Text, View, TouchableOpacity, Image, } from 'react-native';
import { useState } from 'react';
import firebase from '@react-native-firebase/app';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';

const Cadastro = ({ nav, fechar }) => {

    const [novoNome, setNovoNome] = useState ("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha1, setSenha1] = useState("");

    const novoUsuario = () => {
        if(novoNome === '' || email === '' || senha === '' || senha1 === '') {
            alert ('Algum campo esta vazio')
            return;
        }
        if (senha !== senha1) {
            alert ("As senhas não são iguais.")
            return;
        } else {
            firebase.auth().createUserWithEmailAndPassword(novoNome, email, senha)
                .then ((userCredencial) => {
                    const users = userCredencial.users;
                    alert ('O Usuario foi criado com sucesso');
                    fechar
                    nav
                })
                .cath((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage)
                })
        }
    }

    return (
        <View style={IndexStyle.contentLogin}>
            <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>

            <Text style={IndexStyle.textTopo}>Cadastro</Text>

            <Formulario
                espaço='Nome'
                secureTextEntry={false}
                onChangeText={(novoNome) => setNovoNome(novoNome)}
                valor={novoNome}
            />
               
            <Formulario
                espaço='E-mail'
                secureTextEntry={false}
                onChangeText={(email) => setEmail(email)}
                valor={email}
            />
            <Formulario
                espaço ='Senha'
                secureTextEntry={false}
                onChangeText={(senha) => setSenha(senha)}
                valor={senha}
            />

            <Formulario
                espaço='Repita a sua senha'
                secureTextEntry={false}
                onChangeText={(senha1) => setSenha1(senha1)}
                valor={senha1}
            />

            <TouchableOpacity style={IndexStyle.button} onPress={novoUsuario}>
                <Text style={IndexStyle.textBtn}>Cadastro</Text>
            </TouchableOpacity>

            <Text style={IndexStyle.textIcon}>Se cadastre com</Text>

            <View style={IndexStyle.logos}>
                <TouchableOpacity>
                    <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Cadastro;
