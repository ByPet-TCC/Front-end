// Importando os componentes necessários do React e React Native
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Pressable, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';

// Importando o estilo do componente CadastroPet
import CadastroStyle from '../../style/cadastroPet';

// Importando componentes personalizados para o formulário
import TextFormulario from '../../component/formulario/textform';
import SeleGen from '../../component/SeleGen/seleGenero';
import SeleEspecie from '../../component/SeleRaca/seleEspecie';
import SeletorPerfil from '../../component/inputFoto/inputFoto';

// Importando funções do Firebase para autenticação e armazenamento de dados
import { getAuth } from 'firebase/auth';
import { db, storage } from '../../services/firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore/lite';
import { ref, uploadBytes } from 'firebase/storage';

// Definindo o componente CadastroPet
const CadastroPet = ({ navigation }) => {

  // Obtendo o usuário atual do Firebase Auth
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;

  // Definindo o estado inicial para os campos do formulário
  const [nomePet, setNomePet] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [genero, setGen] = useState('');
  const [rga, setRga] = useState('');
  const [idade, setIdade] = useState('');
  const [descr, setDescr] = useState('');
  const [imagem, setImagem] = useState(null);

  // Definindo o caminho da imagem no armazenamento do Firebase
  const enderecoImagem = `${uid}/${nomePet}/fotoPerfil/foto-perfil.png`;

  const refImage = ref(storage, enderecoImagem);

  // Função assíncrona para salvar os dados do pet no Firestore e a imagem no Firebase Storage
  async function Salvar() {
    try {
      // Adicionando um novo documento à coleção 'pet' no Firestore
      const docRef = await addDoc(collection(db, 'pet'), {
        uid: uid,
        Pet: nomePet,
        especie: especie,
        raca: raca,
        genero: genero,
        rga: rga,
        idade: idade,
        descricao: descr,
        endereco: enderecoImagem,
        imagem: imagem,
      });

      // Convertendo a imagem em um blob para upload
      const response = await fetch(imagem);
      const blob = await response.blob();

      // Fazendo o upload do blob para o Firebase Storage
      uploadBytes(refImage, blob)
        .then((snapshot) => {
          console.log('Upload a blob or file!')
        }).catch((error) => {
          console.log(error.message);
        });

      console.log("Document written with ID: ", docRef.id);
      navigation.goBack();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // Renderizando o componente
  return (
    <ScrollView style={CadastroStyle.content}>
      <View style={CadastroStyle.CaixaBranca}>
        <TextFormulario
          texto='Insira o nome do Pet'
          espaço='Nome'
          onChangeText={(novoNomePet) => setNomePet(novoNomePet)}
          valor={nomePet}
        />

        <SeleEspecie seleEspecie={setEspecie} />

        <TextFormulario
          texto='Escolha a raça'
          espaço='Raça'
          onChangeText={(novoRaca) => setRaca(novoRaca)}
          valor={raca}
        />

        <SeleGen seleGen={setGen} />

        <TextFormulario
          texto='RGA (Registro Geral Animal)'
          espaço='XXX.XXX.XXX-5'
          onChangeText={(novoRga) => setRga(novoRga)}
          valor={rga}
          tipo='numeric'
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
          texto='Idade aproximada'
          espaço='Pet'
          onChangeText={(novoIdade) => setIdade(novoIdade)}
          valor={idade}
          tipo='numeric'
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
          value={descr}
        />

      </View>

      <View style={CadastroStyle.CaixaBranca}>

        <View>
          <SeletorPerfil setUriImagem={setImagem} />
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

// Exportando o componente CadastroPet
export default CadastroPet;
