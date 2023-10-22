import React from 'react';
import { Text, View, Pressable, Image} from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';

import {auth, provider} from "../../services/firebase/firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";


const Login = ({ nav, forg, fechar}) => {
  const [email, setEmail] = useState ('');
  const [senha, setSenha] = useState ('');

  const navigate = useNavigate();

  const loginWithGoogle = async () =>  {
    await signInWithPopup (auth, provider);
    navigate("/home");
  };
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
          senha={true}
        />

        <Pressable style={IndexStyle.forget} onPress={forg} onPressOut={fechar}>
            <Text style={IndexStyle.forgetText}>Esqueci minha senha</Text>
        </Pressable>

        <Pressable style={IndexStyle.button} onPress={nav} onPressOut={fechar}>
            <Text style={IndexStyle.textBtn}>Entrar</Text>
        </Pressable>

        <Text style={IndexStyle.textIcon}>Ou faça login com:</Text>

        <View style={IndexStyle.logos}>
                
                  <Pressable >
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