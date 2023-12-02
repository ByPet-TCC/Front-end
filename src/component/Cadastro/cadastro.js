// Importando os módulos necessários do React Native
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importando os serviços do Firebase
import { auth, db } from '../../services/firebase/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

// Importando os estilos do aplicativo
import IndexStyle from '../../style';

// Importando o componente de Formulário
import Formulario from '../formulario/formulario';

// Importando as funções do Firestore
import { doc, setDoc } from 'firebase/firestore/lite';

function Cadastro({ fechar }) {
    // Inicializando a navegação
    const navigation = useNavigation('');

    // Definindo o estado inicial dos campos do formulário
    const [novoNome, setNovoNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha1, setSenha1] = useState("");

    // Definindo o estado inicial da visibilidade da senha
    const [visivel, setVisivel] = useState(true)

    // Função para realizar o cadastro do usuário
    async function cadastrar() {
        // Verificando se todos os campos foram preenchidos
        if (novoNome === '' || email === '' || senha === '' || senha1 === '') {
            alert('É preciso preencher todos os campos!')
            return;
        }
        // Verificando se as senhas são iguais
        if (senha !== senha1) {
            alert("As senhas não são iguais.")
            return;
        } else {
            // Criando o usuário com email e senha
            createUserWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    // O usuário foi criado e está logado.
                    const user = userCredential.user;

                    // Armazene as informações do usuário no Firestore.
                    setDoc(doc(db, 'users', user.uid), {
                        name: novoNome,
                        email: email,
                    });
                    // Navegando para a tela Home
                    navigation.navigate('Home')
                })
                .catch((error) => {
                    // Trate quaisquer erros aqui.
                    console.error(error);
                });
        }
    }

    // Retornando o componente de Cadastro
    return (
        <View style={IndexStyle.contentLogin}>
            <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>

            <Text style={IndexStyle.textTopo}>Cadastro</Text>

            {/* Formulário de Cadastro */}
            <Formulario
                espaço='Nome'
                onChangeText={(novoNome) => setNovoNome(novoNome)}
                valor={novoNome}
            />

            <Formulario
                espaço='E-mail'
                tipo='email-address'
                onChangeText={(email) => setEmail(email)}
                valor={email}
            />
            <Formulario
                espaço='Senha'
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

            {/* Botão para alternar a visibilidade da senha */}
            <Pressable onPress={() => setVisivel(!visivel)} style={IndexStyle.bVisivel}>
                {visivel === false ? <Text style={IndexStyle.visiv}>Senha não visivel</Text> : <Text style={IndexStyle.visiv}>Senha visivel</Text>}
            </Pressable>

            {/* Botão de Cadastro */}
            <TouchableOpacity style={IndexStyle.button} onPress={() => { cadastrar() }} onPressOut={fechar}>
                <Text style={IndexStyle.textBtn}>Cadastro</Text>
            </TouchableOpacity>

            <Text style={IndexStyle.textIcon}>Se cadastre com</Text>

            <View style={IndexStyle.logos}>

                <TouchableOpacity>
                    <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Cadastro;
