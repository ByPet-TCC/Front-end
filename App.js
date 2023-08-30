import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from "./src/page/index";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator // Declação das paginas que poderão ser navegadas
        initialRouteName="Index" /* Definindo que o Index.js é a primeira tela */>
        <Stack.Screen name="Index" component={Index} options={{ header: () => null }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;