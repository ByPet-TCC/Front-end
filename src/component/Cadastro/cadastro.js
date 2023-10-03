import React from 'react';
import { Text, View, Pressable, Image} from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';

export function Cadastro ({ navigation }) {
    
        return (
            <View style={IndexStyle.contentLogin}>
                <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>
                
                <Text style={IndexStyle.textTopo}>Cadastro</Text>

                <TextFormulario
                    espaço={'Nome'}
                />

                <TextFormulario
                    espaço={'E-mail'}
                />

                <Formulario
                    espaço={'Senha'}
                />

                <Formulario
                    espaço={'Repita a sua senha'}
                />
                
                <Pressable style={IndexStyle.button} onPress={ () => navigation.push('Home') }>
                    <Text style={IndexStyle.textBtn}>Cadastro</Text>
                </Pressable>

                <Text style={IndexStyle.textIcon}>Se cadastre com</Text>

                <View style={IndexStyle.logos}>
                    <Pressable>
                        <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx}/>
                    </Pressable>

                    <Pressable>
                        <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx}/>
                    </Pressable>

                    <Pressable>
                        <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx}/>
                    </Pressable>
                </View>
            </View>
        )
}