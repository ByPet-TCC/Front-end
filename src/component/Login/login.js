import React from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';
import IndexStyle from '../../style';


export function Login ({ navigation }) {
    return (
      <View>
        <Image></Image>
        
        <Text>Login</Text>
        
        <TextInput style={IndexStyle.caixaTexto}
            placeholder='E-mail'
        />
        
        <TextInput style={IndexStyle.caixaTexto}
            placeholder='Senha'
        />

        <TouchableOpacity>
            <Text>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={IndexStyle.button} onPress={ () => navigation.push('Home') }>
            <Text style={IndexStyle.textBtn}>Entrar</Text>
        </TouchableOpacity>

        <Text>Ou faça login com:</Text>
      </View>
    );
  }