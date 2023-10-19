import React from 'react';
import { Text, View, Pressable, Image} from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';

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
>>>>>>> 137f8dfb1dce8d25b44b3a4006475148eb105ae5

    return (
      <View style={IndexStyle.contentLogin}>
        <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>
        
        <Text style={IndexStyle.textTopo}>Login</Text>
        
<<<<<<< HEAD
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
=======
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
>>>>>>> 137f8dfb1dce8d25b44b3a4006475148eb105ae5

        <Pressable style={IndexStyle.forget} onPress={forg}>
            <Text style={IndexStyle.forgetText}>Esqueci minha senha</Text>
        </Pressable>

        <Pressable style={IndexStyle.button} onPress={nav}>
            <Text style={IndexStyle.textBtn}>Entrar</Text>
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