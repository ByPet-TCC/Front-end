import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';

//import Collection from '../../services/routes/Collection';
import {auth, provider} from "../../services/firebase/firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";


const Cadastro = ({ nav, fechar }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
   
    const loginWithGoogle = async () =>  {
      await signInWithPopup (auth, provider);
      navigate("/nav");
    };

    return (
        <View style={IndexStyle.contentLogin}>
            <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>

            <Text style={IndexStyle.textTopo}>Cadastro</Text>

            <Formulario
                espaço='Nome'
                secureTextEntry={false}
            />
               
            <Formulario
                espaço='E-mail'
                secureTextEntry={false}
            />
            <Formulario
                espaço ='Senha'
                secureTextEntry={false}
            />

            <Formulario
                espaço='Repita a sua senha'
                secureTextEntry={false}
            />

            <Pressable style={IndexStyle.button} onPress={nav} onPressOut={fechar}>
                <Text style={IndexStyle.textBtn}>Cadastro</Text>
            </Pressable>

            <Text style={IndexStyle.textIcon}>Se cadastre com</Text>

            <View style={IndexStyle.logos}>
                <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx} onPress={()=>{loginWithGoogle}}/>
                </Pressable>

                <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx} onPress={() => {loginWithGoogle}} />
                </Pressable>

                <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx} />
                </Pressable>
            </View>
        </View>
    )
};

export default Cadastro;