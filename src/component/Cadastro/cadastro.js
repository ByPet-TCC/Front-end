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

                <TextFormulario
                    espaço={'Senha'}
                />

                <TextFormulario
                    espaço={'Repita a sua senha'}
                />
                
                <Pressable style={IndexStyle.button} onPress={ () => navigation.push('Home') }>
                    <Text style={IndexStyle.textBtn}>Cadastro</Text>
                </Pressable>

                <Text>Se cadastre com</Text>

                <View>
                    <Pressable>
                        <Image source={require('../../../assets/icons/Login/icon_facebook.png')}/>
                    </Pressable>

                    <Pressable>
                        <Image source={require('../../../assets/icons/Login/icon_facebook.png')}/>
                    </Pressable>

                    <Pressable>
                        <Image source={require('../../../assets/icons/Login/icon_facebook.png')}/>
                    </Pressable>
                </View>
            </View>
        )
}