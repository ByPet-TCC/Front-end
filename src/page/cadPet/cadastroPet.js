import React, { useState, useEffect } from 'react';
import {Text, View, ScrollView, Pressable, TextInput, Image, ImageBackground, StyleSheet} from 'react-native';
import CadastroStyle from '../../style/cadastroPet';

import TextFormulario from '../../component/formulario/textform';
import SeleGen from '../../component/SeleGen/seleGenero';
import SeleEspecie from '../../component/SeleRaca/seleEspecie';
import SeletorPerfil from '../../component/inputFoto/inputFoto';
import { getAuth } from 'firebase/auth';
import { db, storage } from '../../services/firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore/lite';
import { firebase } from '@react-native-firebase/auth';

const CadastroPet = ({navigation}) => {
  function aleta () {
    alert(`${especie}, ${genero}, ${imagem} `)  
  }
  
  const auth = getAuth();
  const user = auth.currentUser
  const uid = firebase.auth().currentUser.uid;

  const [nomePet, setNomePet] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [genero, setGen] = useState('');
  const [rga, setRga] = useState ('');
  const [idade, setIdade] = useState ('');
  const [descr, setDescr] = useState ('');
  const [imagem, setImagem] = useState(null);

  async function Salvar () {
    try {
        const docRef = await addDoc(uid) (collection(db, 'pet'), {
          Pet: nomePet,
          especie: especie,
          raca: raca,
          genero: genero,
          rga: rga,
          idade: idade,
          descricao: descr,
          imagem: imagem,
        })
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    return(
        <ScrollView style={CadastroStyle.content}>
          <View style={CadastroStyle.CaixaBranca}>
            <TextFormulario 
              texto='Insira o nome do Pet'
              espaço='Nome'
              onChangeText={(novoNomePet) => setNomePet(novoNomePet)}
              valor={nomePet}
            />

            <SeleEspecie seleEspecie={setEspecie}/>

            <TextFormulario 
              texto = 'Escolha a raça'
              espaço = 'Raça'
              onChangeText={(novoRaca) => setRaca(novoRaca)}
              valor = {raca}
            />
            
            <SeleGen seleGen={setGen}/>

            <TextFormulario 
              texto = 'RGA (Registro Geral Animal)'
              espaço = 'XXX.XXX.XXX-5'
              onChangeText={(novoRga) => setRga(novoRga)}
              valor = {rga}
              tipo = 'numeric'
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
              texto = 'Idade aproximada'
              espaço = 'Pet'
              onChangeText={(novoIdade) => setIdade(novoIdade)}
              valor = {idade}
              tipo = 'numeric'
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

            <View>
              <SeletorPerfil setUriImagem={setImagem}/>
            </View>

            <Pressable style={CadastroStyle.Salvar} onPress={Salvar}>
              <Text style={CadastroStyle.TextSalvar}>Salvar</Text>
            </Pressable>
            <Text style={CadastroStyle.Texto}>
            *Sabia que o focinho do seu pet tem uma digital e ela é unica assim como a sua?
             Por isso é  importante importar a foto do focinho, assim conseguirá identificar seu pet.
            </Text>
          </View>
        </ScrollView>
    )
}

export default CadastroPet;