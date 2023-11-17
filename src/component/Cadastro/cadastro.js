import React from 'react';
import { Text, View, TouchableOpacity, Image, } from 'react-native';
import { useState } from 'react';
import { auth } from '../../services/firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';

const Cadastro = ({ nav, fechar }) => {

    const [novoNome, setNovoNome] = useState ("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha1, setSenha1] = useState(""); 
    const [usuario, setUsuario] = useState([])

    async function cadastrar() {
        if(novoNome === '' || email === '' || senha === '' || senha1 === '') {
            alert ('É preciso preencher todos os campos!')
            return;
        }
        if (senha !== senha1) {
            alert ("As senhas não são iguais.")
            return;
        } else {
                const resultado = await createUserWithEmailAndPassword( auth, email, senha )

                setUsuario(resultado)
        }
        console.log(usuario)
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
                tipo= 'email-address'
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

            <TouchableOpacity style={IndexStyle.button} onPress={() => {cadastrar()}}>
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
