import React from 'react';
import { Text, View, Pressable, Image} from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';

const Cadastro=  ({ nav }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    
        return (
            <View style={IndexStyle.contentLogin}>
                <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>
                
                <Text style={IndexStyle.textTopo}>Cadastro</Text>

                <Formulario
                    espaço={'Nome'}
                    valor={nome}
                    onChangeText={(novoNome) => setNome(novoNome)}
                />

                <Formulario
                    espaço={'E-mail'}
                    valor={email}
                    onChangeText={(novoEmail) => setEmail(novoEmail)}
                />

                <Formulario
                    espaço={'Senha'}
                    senha={true}
                />

                <Formulario
                    espaço={'Repita a sua senha'}
                    senha={true}
                />
                
                <Pressable style={IndexStyle.button} onPress={ nav }>
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
};

export default Cadastro;