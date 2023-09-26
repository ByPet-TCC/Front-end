import React from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, Pressable} from 'react-native';
import IndexStyle from '../../style';

// Inicialização da tela de Login/Cadastro
const Index = ({navigation}) => {
  return (
        <ImageBackground source={require("../../../assets/fundo.png")} style={IndexStyle.ImageBackground}>
            <View style={IndexStyle.container}>
              <Text style={IndexStyle.textTitulo}>BY PET</Text>
              <Text style={IndexStyle.textDesc}>Conectando você ao seu Pet</Text>

              <View style={IndexStyle.gradiente}>
                <Pressable style={IndexStyle.button} onPress={() => navigation.navigate('Login')}>
                  <Text style={IndexStyle.textBtn}>
                    Bem vindo de volta
                  </Text>
                </Pressable>

                <Pressable style={IndexStyle.button} onPress={() => navigation.navigate('Cadastro')}>
                  <Text style={IndexStyle.textBtn}>
                    Criar conta
                  </Text>
                </Pressable>
              </View>

            </View>
        </ImageBackground>
  );
};

export default Index;