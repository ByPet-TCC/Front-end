import React from 'react';
import { Text, View, Pressable, Image} from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';


const Login = ({ nav }) => {
  const [email, setEmail] = useState ('');
  const [senha, setSenha] = useState ('');

    return (
      <View style={IndexStyle.contentLogin}>
        <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>
        
        <Text style={IndexStyle.textTopo}>Login</Text>
        
        <TextFormulario
          espaço='E-mail'
          valor={email}
          onChangeText={(novoEmail) => setEmail(novoEmail)}
          secureTextEntry={false}
        />

        <Formulario
          espaço='Senha'
          valor={senha}
          onChangeText={(novaSenha) => setSenha(novaSenha)}
        />

        <Pressable style={IndexStyle.forget}>
            <Text style={IndexStyle.forgetText}>Esqueci minha senha</Text>
        </Pressable>

        <Pressable style={IndexStyle.button} >
            <Text style={IndexStyle.textBtn} onPress={nav}>Entrar</Text>
        </Pressable>

        <Text style={IndexStyle.textIcon}>Ou faça login com:</Text>

        <View style={IndexStyle.logos}>
                  <Pressable>
                      <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx} />
                   </Pressable>

                  <Pressable>
                      <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx}/>
                  </Pressable>

                  <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx}/>
                  </Pressable>
              </View>
      </View>
    );
  }
export default Login;