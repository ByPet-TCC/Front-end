// Importando os módulos necessários do React Native
import React, { useState } from 'react';
import {Text, View, ImageBackground, Pressable, TouchableHighlight, Modal} from 'react-native';

// Importando os estilos do aplicativo
import IndexStyle from '../../style';

// Importando os componentes de Login e Cadastro
import Login from '../../component/Login/login';
import Cadastro from '../../component/Cadastro/cadastro';

// Inicialização da tela de Login/Cadastro
const Index = ({navigation}) => {
  // Definindo o estado inicial dos modais de Login e Cadastro
  const [modalLogin, setModalLogin] = useState(false);
  const [modalCadastro, setModalCadastro] = useState(false);

  return (
    // Definindo o background da tela
    <ImageBackground source={require("../../../assets/fundo.png")} style={IndexStyle.ImageBackground}>
      <View style={IndexStyle.container}>
        <Text style={IndexStyle.textTitulo}>BY PET</Text>
        <Text style={IndexStyle.textDesc}>Conectando você ao seu Pet</Text>

        <View>
          {/* Botão para abrir o modal de Login */}
          <TouchableHighlight style={IndexStyle.button} onPress={() => setModalLogin(true)}>
            <Text style={IndexStyle.textBtn}>
              Bem vindo de volta
            </Text>
          </TouchableHighlight>

          {/* Botão para abrir o modal de Cadastro */}
          <TouchableHighlight style={IndexStyle.button} onPress={() => setModalCadastro(true)}>
            <Text style={IndexStyle.textBtn}>
              Criar conta
            </Text>
          </TouchableHighlight>
        </View>

        {/* Modal de Login */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalLogin}
        > 
          <Pressable style={IndexStyle.modal}
            onPress={() => {
            setModalLogin(!modalLogin);
          }}><Text/></Pressable>
          <Login
            forg={() => navigation.navigate('Senha')}
            fechar={() => setModalLogin(false)}
          />
        </Modal>

        {/* Modal de Cadastro */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalCadastro}
        > 
          <Pressable style={IndexStyle.modal}
            onPress={() => {
            setModalCadastro(!modalCadastro);
          }}><Text/></Pressable>
          <Cadastro
            fechar={() => setModalCadastro(false)}
          />
        </Modal>
      </View>
    </ImageBackground>
  );
};

// Exportando o componente Index
export default Index;
