import React, { useEffect, useState } from 'react';
import {Text, View, Modal, Pressable, ScrollView, Dimensions, TextInput, FlatList, Touchable, TouchableOpacity, } from 'react-native';
import Header from '../../component/perfil/header';
import PerfilStyle from '../../style/perfilPet';
import Paw from '../../component/Paw/paw';
import Post from '../../component/perfil/post';

const Perfil = ({navigation}) => {
    const [nomePet, setNomePet] = useState ('Anderson');
    const [idade, setIdade] = useState ('23');
    const [descr, setDescr] = useState('Test');
    const [altDescr, setAltDescr] = useState (descr);
    const [modalDescr, setModalDescr] = useState(false);

    const [data, setData] = useState([
        {key: 1, nome: nomePet, imagem: require("../Test/imagem.png")},
        {key: 2, nome: nomePet, imagem: require("../Test/imagem1.png")},
        {key: 3, nome: nomePet, imagem: require("../Test/imagem2.png")}
    ]);

    return (
        <View>
            <Modal
                    animationType= 'fade'
                    transparent={true}
                    visible={modalDescr}
                >
                    <Pressable style={{width: '100%', height: '100%', }} onPress={() => setModalDescr(false)}><Text/></Pressable>
                    <View style={PerfilStyle.modal}>
                        <View style={PerfilStyle.content}>
                            <TextInput style={PerfilStyle.descr}
                                editable
                                multiline
                                placeholder='Sobre o animal e informações relevantes'
                                onChangeText={(altDescr) => setAltDescr(altDescr)}
                                value = {altDescr}
                            />
                            <View style={PerfilStyle.botoes}>
                                <TouchableOpacity style={PerfilStyle.cancelar} onPress={() => setModalDescr(false)}>
                                    <Text style={PerfilStyle.text}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={PerfilStyle.salvar} onPress={() => setDescr(altDescr)} onPressOut={() => setModalDescr(false)}>
                                    <Text style={PerfilStyle.text}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal> 
            <ScrollView>
                <Header 
                    nome={nomePet}
                    idade={idade}
                    descricao={descr}
                    modal={() => setModalDescr(true)}
                />

                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Post imagem={item.imagem} pet={item.nome}/>
                    )} 
                />
                
            </ScrollView>
            <Paw 
                home={() => navigation.navigate('Home')}
                config={() => navigation.navigate('Configurações')}
            />
        </View>
    )
}

export default Perfil;