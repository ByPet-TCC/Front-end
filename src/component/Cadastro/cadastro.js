import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';

const Cadastro = ({ nav, fechar }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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

            <TouchableOpacity style={IndexStyle.button} onPressIn={nav} onPressOut={fechar}>
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
