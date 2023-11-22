import React, { useState } from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, Pressable, TouchableHighlight, Modal} from 'react-native';
import IndexStyle from '../../style';

import TextFormulario from '../../component/formulario/textform';
import SenhaStyle from '../../style/senha';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebase/firebaseConfig';

const Senha = ({navigation}) => {
    const [email, setEmail] = useState('');

    const redefinirSenha = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            console.log ('Email de redefinição de senha foi enviado com sucesso')
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <View style={SenhaStyle.content}>
            <View style={SenhaStyle.conteudo}>
                <View style={SenhaStyle.icone}>
                    <Image source={require('../../../assets/icons/Login/logo.png')} style={SenhaStyle.img} />
                </View>
                <Text style={SenhaStyle.titulo}>
                    Esqueci minha senha
                </Text>
                <Text style={SenhaStyle.text}>
                    Para redefinir sua senha, informe o usuario ou E-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.
                </Text>
                <TextFormulario
                    texto={'E-mail ou usuários'}
                    espaço={'Bypet@email.com'}
                    valor={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <View style={SenhaStyle.botao}>
                    <Pressable style={SenhaStyle.bottomEnviar} onPress={redefinirSenha}>
                        <Text style={SenhaStyle.textEnviar}>
                            Enviar
                        </Text>
                    </Pressable>
                    
                    <Pressable style={SenhaStyle.bottomBack} onPress={() => navigation.goBack('')}>
                        <Text style={SenhaStyle.textBack}>
                            Cancelar
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
export default Senha;