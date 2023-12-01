import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { auth } from './src/services/firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Index from "./src/page/index";
import home from './src/page/home/home';
import CadastroPet from './src/page/cadPet/cadastroPet';
import Senha from './src/page/senha/senha';
import Config from './src/page/options/options';
import Vacina from './src/page/vacina/vacina';
import Perfil from './src/page/perfilPet/perfilPet';

import Test from './src/page/Test/test';

const Stack = createStackNavigator();

function App() {
  const auth = getAuth();
  const user = auth.currentUser

  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null; // or a loading spinner
  }

  return (
    <NavigationContainer >
      <Stack.Navigator // Declação das paginas que poderão ser navegadas
        initialRouteName={user ? 'Home' : 'Index'} /* Definindo que o Index.js é a primeira tela */
      >

        <Stack.Screen /* Declaração da pagina */
          name="Index" /* Nomeando a Tela para ser chamada no projeto*/
          component={Index} /* Chamando o elemendo */
          options={{ header: () => null }}  /* Configuração da pagina, no caso estou desabilitando o cabeçalho padrão do Stack */
        />

        <Stack.Screen
          name="Home"
          component={home}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="CadastroPet"
          component={CadastroPet}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0FC2BF'
            }
          }}
        />

        <Stack.Screen
          name="Senha"
          component={Senha}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="Configurações"
          component={Config}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0FC2BF'
            }
          }}
        />

        <Stack.Screen
          name="Carteira de vacina"
          component={Vacina}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0FC2BF'
            }
          }}
        />

        <Stack.Screen
          name="Perfil Pet"
          component={Perfil}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0FC2BF'
            }
          }}
        />

        <Stack.Screen
          name="Test"
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;