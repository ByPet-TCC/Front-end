import React, { useState } from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, Pressable, TouchableHighlight, Modal} from 'react-native';
import IndexStyle from '../../style';

import Login from '../../component/Login/login';
import Cadastro from '../../component/Cadastro/cadastro';


// Inicialização da tela de Login/Cadastro
const Index = ({navigation}) => {
  const [modalLogin, setModalLogin] = React.useState(false);
  const [modalCadastro, setModalCadastro] = useState(false);

  return (
        <ImageBackground source={require("../../../assets/fundo.png")} style={IndexStyle.ImageBackground}>
            <View style={IndexStyle.container}>
              <Text style={IndexStyle.textTitulo}>BY PET</Text>
              <Text style={IndexStyle.textDesc}>Conectando você ao seu Pet</Text>

              <View>
                <TouchableHighlight style={IndexStyle.button} onPress={() => setModalLogin(true)}>
                  <Text style={IndexStyle.textBtn}>
                    Bem vindo de volta
                  </Text>
                </TouchableHighlight>

                <TouchableHighlight style={IndexStyle.button} onPress={() => setModalCadastro(true)}>
                  <Text style={IndexStyle.textBtn}>
                    Criar conta
                  </Text>
                </TouchableHighlight>
              </View>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalLogin}
              > 
<<<<<<< Updated upstream
                <Login/>
                <TouchableHighlight
                  onPress={() => {
                  setModalLogin(!modalLogin);
                }}><Text style={IndexStyle.modal}></Text></TouchableHighlight>
=======
                <Pressable style={IndexStyle.modal}
                  onPress={() => {
                  setModalLogin(!modalLogin);
                }}><Text/></Pressable>
                <Login
                  nav={() => navigation.navigate('Home')}
                />

              </Modal>

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
                  nav={() => navigation.navigate('Home')}
                />

>>>>>>> Stashed changes
              </Modal>
            </View>

        </ImageBackground>
  );
};

export default Index;