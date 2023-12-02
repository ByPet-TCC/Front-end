// Importando os módulos necessários
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './src/services/firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Importando as páginas do aplicativo
import Index from "./src/page/index";
import home from './src/page/home/home';
import CadastroPet from './src/page/cadPet/cadastroPet';
import Senha from './src/page/senha/senha';
import Config from './src/page/options/options';
import Vacina from './src/page/vacina/vacina';
import Perfil from './src/page/perfilPet/perfilPet';
import Test from './src/page/Test/test';

// Criando o objeto Stack para a navegação
const Stack = createStackNavigator();

function App() {
  // Obtendo a instância de autenticação
  const auth = getAuth();
  const user = auth.currentUser

  // Inicializando o estado
  const [initializing, setInitializing] = useState(true);

  // Função para lidar com as mudanças de estado do usuário
  function onAuthStateChanged(user) {
    if (initializing) setInitializing(false);
  }

  // Usando o hook useEffect para lidar com a mudança de estado do usuário
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthStateChanged);
    return subscriber; // cancela a inscrição na desmontagem
  }, []);

  // Retornando null enquanto inicializa
  if (initializing) {
    return null; // ou um spinner de carregamento
  }

  // Retornando o componente de navegação
  return (
    <NavigationContainer>
      <Stack.Navigator // Declaração das páginas que poderão ser navegadas
        initialRouteName={user ? 'Home' : 'Index'} // Definindo que o Index.js é a primeira tela
      >

        {/* As telas do aplicativo são declaradas dentro do Stack.Navigator */}

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

// Exportando o componente App

export default App;