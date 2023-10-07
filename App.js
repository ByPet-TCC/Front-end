import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import Index from "./src/page/index";
import Home from './src/page/home/home';
import CadastroPet from './src/page/cadPet/cadastroPet';
import { Login } from './src/component/Login/login';
import { Cadastro } from './src/component/Cadastro/cadastro';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator // Declação das paginas que poderão ser navegadas
        initialRouteName="Home" /* Definindo que o Index.js é a primeira tela */>

        <Stack.Screen /* Declaração da pagina */
          name="Index" /* Nomeando a Tela para ser chamada no projeto*/
          component={Index} /* Chamando o elemendo */
          options={{ header: () => null }}  /* Configuração da pagina, no caso estou desabilitando o cabeçalho padrão do Stack */
        />

        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ header: () => null, cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS}}
        />

        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{ header: () => null, cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS}}
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;