import React, { useState } from 'react';
import {Text, View, ScrollView, Pressable, TextInput, Image, ImageBackground, StyleSheet} from 'react-native';
import CadastroStyle from '../../style/cadastroPet';

import TextFormulario from '../../component/formulario/textform';
import SeleGen from '../../component/SeleGen/seleGenero';
import SeleRaca from '../../component/SeleRaca/seleRaca';

const Cadastro = ({navigation}) => {
  const [nomePet, setNomePet] = useState('');

  const [imagemRaca, setImagemRaca] = useState(null);

  const [raca, setRaca] = useState ('');
  const [rga, setRga] = useState ('');
  const [idade, setIdade] = useState ('');
  const [descr, setDescr] = useState ('');

    return(
        <View style={CadastroStyle.content}>
          <View style={CadastroStyle.CaixaBranca}>
            <TextFormulario 
              texto='Insira o nome do Pet'
              espaço='Nome'
              onChangeText={(novoNomePet) => setNomePet(novoNomePet)}
              valor={nomePet}
            />

            <SeleRaca />

            <TextFormulario 
              texto = 'Escolha a raça'
              espaço = 'Raça'
              onChangeText={(novoRaca) => setRaca(novoRaca)}
              valor = {raca}
            />
            
            <SeleGen />

            <TextFormulario 
              texto = 'RGA (Registro Geral Animal)'
              espaço = 'XXX.XXX.XXX-5'
              onChangeText={(novoRga) => setRga(novoRga)}
              valor = {rga}
            />
          </View>

          <View style={CadastroStyle.CaixaBranca}>
            <View>
              <View style={CadastroStyle.Data}>
                <Text style={CadastroStyle.TextoData}>
                  Data de nascimento
                </Text>
              </View>
            </View>

            <TextFormulario 
              texto = 'Idade'
              espaço = 'Pet'
              onChangeText={(novoIdade) => setIdade(novoIdade)}
              valor = {idade}
            />

          </View>

          <View style={CadastroStyle.CaixaBranca}>
            <Text style={CadastroStyle.TextoPerg}>
              Informações:
            </Text>
            <TextInput style={CadastroStyle.CaixaDesc}
              editable
              multiline
              placeholder='Sobre o animal e informações relevantes'
              onChangeText={(novoDescr) => setDescr(novoDescr)}
              value = {descr}
            />

          </View>

          <View style={CadastroStyle.CaixaBranca}>
            <Pressable style={CadastroStyle.Salvar}>
              <Text style={CadastroStyle.TextSalvar}>Salvar</Text>
            </Pressable>
            <Text style={CadastroStyle.Texto}>
            *Sabia que o focinho do seu pet tem uma digital e ela é unica assim como a sua?
             Por isso é  importante importar a foto do focinho, assim conseguirá identificar seu pet.
            </Text>
          </View>
        </View>
    )
}

export default Cadastro;