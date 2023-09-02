import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from "./src/page/index";
import Home from './src/page/home/home';

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
          name="Home" 
          component={Home} 
          options={{ header: () => null }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;