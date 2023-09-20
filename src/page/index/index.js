import React from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';
import IndexStyle from '../../style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Inicialização da tela de Login/Cadastro
const Index = ({navigation}) => {
  return (
        <ImageBackground source={require("../../../assets/fundo.png")} style={IndexStyle.ImageBackground}>
            <View style={IndexStyle.container}>
              <Text style={IndexStyle.textTitulo}>BY PET</Text>
              <Text style={IndexStyle.textDesc}>Conectando você ao seu Pet</Text>

              <View>
                <TouchableOpacity style={IndexStyle.button} onPress={() => navigation.navigate('Login')}>
                  <Text style={IndexStyle.textBtn}>
                    Bem vindo de volta
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={IndexStyle.button} onPress={() => navigation.navigate('CadastroPet')}>
                  <Text style={IndexStyle.textBtn}>
                    Criar conta
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
        </ImageBackground>
  );
};

export default Index;