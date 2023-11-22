import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase/firebaseConfig';


function Login ({ forg, fechar }) {
  const navigation = useNavigation()

  const [email, setEmail] = useState ('');
  const [senha, setSenha] = useState ('');
  const [visivel, setVisivel] = useState(true);


  async function logar() {
    if (email === '' || senha === '') {
      alert ('Algum campo esta vazio')
      return;
    } else {
        const resultado = await signInWithEmailAndPassword(auth, email, senha)

         navigation.navigate('Home')
        // console.log(resultado)
    }
  }

    return (
      <View style={IndexStyle.contentLogin}>
        <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>
        
        <Text style={IndexStyle.textTopo}>Login</Text>
        
        <Formulario
          espaço='E-mail'
          valor={email}
          onChangeText={(novoEmail) => setEmail(novoEmail)}
          tipo= 'email-address'
        />

        <Formulario
          espaço='Senha'
          valor={senha}
          onChangeText={(novaSenha) => setSenha(novaSenha)}
          senha={visivel}
        />

        <TouchableOpacity style={IndexStyle.forget} onPressIn={forg} onPressOut={fechar}>
            <Text style={IndexStyle.forgetText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={IndexStyle.button} onPress={logar} onPressOut={fechar}>
            <Text style={IndexStyle.textBtn}>Entrar</Text>
        </TouchableOpacity>

        <Text style={IndexStyle.textIcon}>Ou faça login com:</Text>

        <View style={IndexStyle.logos}>
                  {/* <TouchableOpacity>
                      <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx} />
                   </TouchableOpacity> */}

                  <TouchableOpacity>
                      <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx}/>
                  </TouchableOpacity>

                  {/* <TouchableOpacity>
                    <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx}/>
                  </TouchableOpacity> */}
              </View>
      </View>
    );
  }
export default Login;
