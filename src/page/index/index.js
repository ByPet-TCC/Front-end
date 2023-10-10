import React, { useState } from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, Pressable, TouchableHighlight, Modal} from 'react-native';
import IndexStyle from '../../style';

import Login from '../../component/Login/login copy';
import Paw from '../../component/Paw/paw';


// Inicialização da tela de Login/Cadastro
const Index = ({navigation}) => {
  const [modalLogin, setModalLogin] = React.useState(false);

  return (
        <ImageBackground source={require("../../../assets/fundo.png")} style={IndexStyle.ImageBackground}>
            <View style={IndexStyle.container}>
              <Text style={IndexStyle.textTitulo}>BY PET</Text>
              <Text style={IndexStyle.textDesc}>Conectando você ao seu Pet</Text>

              <View style={IndexStyle.gradiente}>
                <TouchableHighlight style={IndexStyle.button} onPress={() => setModalLogin(true)}>
                  <Text style={IndexStyle.textBtn}>
                    Bem vindo de volta
                  </Text>
                </TouchableHighlight>

                <TouchableHighlight style={IndexStyle.button} onPress={() => navigation.navigate('Cadastro')}>
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
                <Login/>
                <TouchableHighlight
                  onPress={() => {
                  setModalLogin(!modalLogin);
                }}><Text style={IndexStyle.modal}></Text></TouchableHighlight>
              </Modal>
            </View>

        </ImageBackground>
  );
};

export default Index;