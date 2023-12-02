// Importando os módulos necessários do React Native
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importando os estilos do aplicativo
import IndexStyle from '../../style';

// Importando o componente de Formulário
import Formulario from '../formulario/formulario';

// Importando as funções de autenticação do Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase/firebaseConfig';

function Login ({ forg, fechar }) {
  // Inicializando a navegação
  const navigation = useNavigation();

  // Definindo o estado inicial dos campos do formulário
  const [email, setEmail] = useState ('');
  const [senha, setSenha] = useState ('');

  // Definindo o estado inicial da visibilidade da senha
  const [visivel, setVisivel] = useState(true);

  // Função para realizar o login do usuário
  async function logar() {
    // Verificando se todos os campos foram preenchidos
    if (email === '' || senha === '') {
      alert ('Algum campo esta vazio');
      return;
    } else {
      // Realizando o login com email e senha
      const resultado = await signInWithEmailAndPassword(auth, email, senha);

      // Navegando para a tela Home
      navigation.navigate('Home');
    }
  }

  // Retornando o componente de Login
  return (
    <View style={IndexStyle.contentLogin}>
      <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>
      
      <Text style={IndexStyle.textTopo}>Login</Text>
      
      {/* Formulário de Login */}
      <Formulario
        espaço='E-mail'
        valor={email}
        onChangeText={(novoEmail) => setEmail(novoEmail)}
        tipo= 'email-address'
      />

      <Formulario
        espaço='Senha'
        valor={senha}
        onChangeText={(novaSenha) => setSenha(novaSenha)}
        senha={visivel}
      />

      {/* Botão para alternar a visibilidade da senha */}
      <Pressable onPress={() => setVisivel(!visivel)} style={IndexStyle.bVisivel}>
        {visivel === false ? <Text style={IndexStyle.visiv}>Senha não visivel</Text> : <Text style={IndexStyle.visiv}>Senha visivel</Text>}
      </Pressable>

      {/* Botão para recuperar a senha */}
      <TouchableOpacity style={IndexStyle.forget} onPress={forg} onPressOut={fechar}>
          <Text style={IndexStyle.forgetText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Botão de Login */}
      <TouchableOpacity style={IndexStyle.button} onPress={logar} onPressOut={fechar}>
          <Text style={IndexStyle.textBtn}>Entrar</Text>
      </TouchableOpacity>

      <Text style={IndexStyle.textIcon}>Ou faça login com:</Text>

      <View style={IndexStyle.logos}>
        {/* Botões para login com redes sociais */}
        <TouchableOpacity>
            <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Exportando o componente Login
export default Login;
