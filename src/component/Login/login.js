import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';


const Login = ({ nav, forg, fechar}) => {
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
          senha={true}
        />

        <TouchableOpacity style={IndexStyle.forget} onPressIn={forg} onPressOut={fechar}>
            <Text style={IndexStyle.forgetText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={IndexStyle.button} onPressIn={nav} onPressOut={fechar}>
            <Text style={IndexStyle.textBtn}>Entrar</Text>
        </TouchableOpacity>

        <Text style={IndexStyle.textIcon}>Ou faça login com:</Text>

        <View style={IndexStyle.logos}>
                  <TouchableOpacity>
                      <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx} />
                   </TouchableOpacity>

                  <TouchableOpacity>
                      <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx}/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx}/>
                  </TouchableOpacity>
              </View>
      </View>
    );
  }
export default Login;
