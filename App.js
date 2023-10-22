import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import Index from "./src/page/index";
import Home from './src/page/home/home';
import CadastroPet from './src/page/cadPet/cadastroPet';
import Senha from './src/page/senha/senha';
import Config from './src/page/options/options';

import Test from './src/page/Test/test';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator // Declação das paginas que poderão ser navegadas
        initialRouteName="Cadastro" /* Definindo que o Index.js é a primeira tela */>

        <Stack.Screen /* Declaração da pagina */
          name="Index" /* Nomeando a Tela para ser chamada no projeto*/
          component={Index} /* Chamando o elemendo */
          options={{ header: () => null }}  /* Configuração da pagina, no caso estou desabilitando o cabeçalho padrão do Stack */
        />

        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ header: () => null }}
        />

        <Stack.Screen 
          name="CadastroPet" 
          component={CadastroPet}
        />

        <Stack.Screen 
          name="Senha" 
          component={Senha}
          options={{ header: () => null }}
          />

        <Stack.Screen 
          name="Configurações" 
          component={Config}
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