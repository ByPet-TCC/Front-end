// Importando os componentes necessários do React e React Native
import React, { useState } from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, Pressable, TouchableHighlight, Modal} from 'react-native';
import IndexStyle from '../../style';

// Importando componentes personalizados
import TextFormulario from '../../component/formulario/textform';
import SenhaStyle from '../../style/senha';

// Importando funções do Firebase para autenticação e redefinição de senha
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebase/firebaseConfig';

// Definindo o componente Senha
const Senha = ({navigation}) => {
    // Definindo o estado inicial para o email
    const [email, setEmail] = useState('');

    // Função para redefinir a senha do usuário
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
                    {/* Renderizando a imagem do logo */}
                    <Image source={require('../../../assets/icons/Login/logo.png')} style={SenhaStyle.img} />
                </View>
                {/* Renderizando o título e o texto */}
                <Text style={SenhaStyle.titulo}>
                    Esqueci minha senha
                </Text>
                <Text style={SenhaStyle.text}>
                    Para redefinir sua senha, informe o usuario ou E-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.
                </Text>
                {/* Renderizando o campo de texto para o email */}
                <TextFormulario
                    texto={'E-mail ou usuários'}
                    espaço={'Bypet@email.com'}
                    valor={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <View style={SenhaStyle.botao}>
                    {/* Quando pressionado, a função redefinirSenha é chamada */}
                    <Pressable style={SenhaStyle.bottomEnviar} onPress={redefinirSenha}>
                        <Text style={SenhaStyle.textEnviar}>
                            Enviar
                        </Text>
                    </Pressable>
                    
                    {/* Quando pressionado, o usuário é redirecionado para a página anterior */}
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
