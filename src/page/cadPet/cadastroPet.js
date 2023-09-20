import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet} from 'react-native';
import CadastroStyle from '../../style/cadastroPet';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Cadastro = ({navigation}) => {
  const nome = () => {
    <View>
      <Text>
        Teste
      </Text>
    </View>
  }

    return(
        <View style={CadastroStyle.content}>
          <View style={CadastroStyle.CaixaBranca}>
            <Text style={CadastroStyle.TextoPerg}>
              Insira o nome do Pet
            </Text>
            <TextInput style={CadastroStyle.caixaTexto}
              placeholder='Nome'
            />

            <Text style={CadastroStyle.TextoPerg}>
              Insira a especie do Pet
            </Text>
            <View style={CadastroStyle.seleRaca}>
              <TouchableOpacity>
              <Image style={CadastroStyle.img} source={require('../../../assets/icons/gato.png')}/>
              </TouchableOpacity>
              <Image style={CadastroStyle.img} source={require('../../../assets/icons/cachorro.png')}/>
              <Image style={CadastroStyle.img} source={require('../../../assets/icons/coelho.png')}/>
              <Image style={CadastroStyle.img} source={require('../../../assets/icons/hamster.png')}/>
            </View>

            <Text style={CadastroStyle.TextoPerg}>
              Escolha a raça
            </Text>
            <TextInput style={CadastroStyle.caixaTexto}
              placeholder='Raça'>
            </TextInput>
            
            <Text style={CadastroStyle.TextoPerg}>
              Qual o sexo do Pet?
            </Text>
            <View style={CadastroStyle.seleRaca}>
              <Image style={CadastroStyle.img} source={require('../../../assets/icons/gato.png')}/>
              <Image style={CadastroStyle.img} source={require('../../../assets/icons/cachorro.png')}/>
            </View>

            <Text style={CadastroStyle.TextoPerg}>
              RGA (Registro Geral Animal)
            </Text>
            <TextInput style={CadastroStyle.caixaTexto}
              placeholder='XXX.XXX.XXX-5'>
            </TextInput>
          </View>

          <View style={CadastroStyle.CaixaBranca}>
            <View>
              <View style={CadastroStyle.Data}>
                <Text style={CadastroStyle.TextoData}>
                  Data de nascimento
                </Text>
              </View>
            </View>
            <Text style={CadastroStyle.TextoPerg}>
              Idade
            </Text>
            <TextInput style={CadastroStyle.caixaTexto}
              placeholder='PET'>
            </TextInput>
          </View>

          <View style={CadastroStyle.CaixaBranca}>
            <Text style={CadastroStyle.TextoPerg}>
              Informações:
            </Text>
            <TextInput style={CadastroStyle.CaixaDesc}
              editable
              multiline
              placeholder='Sobre o animal e informações relevantes'/>
          </View>

          <View style={CadastroStyle.CaixaBranca}>
            <TouchableOpacity style={CadastroStyle.Salvar}>
              <Text style={CadastroStyle.TextSalvar}>Salvar</Text>
            </TouchableOpacity>
            <Text style={CadastroStyle.Texto}>
            *Sabia que o focinho do seu pet tem uma digital e ela é unica assim como a sua? Por isso é  importante importar a foto do focinho, assim conseguirá identificar seu pet.
            </Text>
          </View>
        </View>
    )
}

export default Cadastro;