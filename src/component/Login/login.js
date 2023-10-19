import React from 'react';
import { Text, View, Pressable, Image} from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';

//Autenticador, Login , Sevidor configuração

import { auth } from "../../services/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ nav }) => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repass, setRepass] = useState("");

  const auth = getAuth()
  async function handleLog(e) {
    e.preventDefault
    signInWithEmailAndPassword(auth, email, senha)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
  }; 

    return (
      <View style={IndexStyle.contentLogin}>
        <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>
        
        <Text style={IndexStyle.textTopo}>Login</Text>
        
      <Text style={IndexStyle.textTopo}>Login</Text>

      <TextFormulario
        espaço='E-mail'
        onChange={(e) => { setEmail(e.target.value) }}
        secureTextEntry={false}
      />

      <Formulario
        espaço='Senha'
        onChange={(e) => { setSenha(e.target.value) }}
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