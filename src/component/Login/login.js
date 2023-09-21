import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';


export function Login ({ navigation }) {
  const [email, setEmail] = useState ('');
  const [senha, setSenha] = useState ('');

    return (
      <View style={IndexStyle.contentLogin}>
        <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>
        
        <Text style={IndexStyle.textTopo}>Login</Text>
        
        <Formulario
          espaço='E-mail'
          valor={email}
          onChangeText={(novoEmail) => setEmail(novoEmail)}
        />

        <Formulario
          espaço='Senha'
          valor={senha}
          onChangeText={(novaSenha) => setSenha(novaSenha)}
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