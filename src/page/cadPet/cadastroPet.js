import { useState, useEffect } from 'react';
import {Text, View, ScrollView, Pressable, TextInput, Image, ImageBackground, StyleSheet} from 'react-native';
import CadastroStyle from '../../style/cadastroPet';

import TextFormulario from '../../component/formulario/textform';
import SeleGen from '../../component/SeleGen/seleGenero';
import SeleRaca from '../../component/SeleRaca/seleRaca';

import { useNavigate } from "react-router-dom";

import {collection,getDocs,addDoc,updateDoc,deleteDoc,doc,} from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const Cadastro = ({navigation}) => {

  const [nomePet, setNomePet] = useState('');
  const [raca, setRaca] = useState('');
  const [rga, setRga] = useState ('');
  const [idade, setIdade] = useState ('');
  const [descr, setDescr] = useState ('');

  const [pet, setPet] = useState([]);

    const usersCollectionRef = collection (db,"pet");

  const createPet = async () => {
    await addDoc(usersCollectionRef, { pet_name: nomePet ,pet_breed: raca, rga_id: String(rga), age_pet: String(idade), description : String(descr) });
  };

  const updateUser = async (id, senha) => {
    const userDoc = doc(db, "pet", id);
    const newFields = { senha: senha==senha};
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setPet(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [usersCollectionRef]);

    return(
        <ScrollView style={CadastroStyle.content}>
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
            <Pressable style={CadastroStyle.Salvar} onClick={createPet}>
              <Text style={CadastroStyle.TextoPerg} > Salvar </Text>
            </Pressable>
            <Text style={CadastroStyle.Texto}>
            *Sabia que o focinho do seu pet tem uma digital e ela é unica assim como a sua?
             Por isso é  importante importar a foto do focinho, assim conseguirá identificar seu pet.
            </Text>
          </View>
        </ScrollView>
    )
}

export default Cadastro;