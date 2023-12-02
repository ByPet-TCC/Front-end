// Importando os componentes necessários do React e React Native
import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, Modal, Pressable, TextInput, FlatList, TouchableOpacity, } from 'react-native';

// Importando componentes personalizados
import Header from '../../component/perfil/header';
import PerfilStyle from '../../style/perfilPet';
import Paw from '../../component/Paw/paw';
import Post from '../../component/perfil/post';

// Importando funções do Firebase para autenticação e armazenamento de dados
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore/lite';
import { db, storage } from '../../services/firebase/firebaseConfig';
import { ref, getStorage, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Importando o seletor de imagens
import * as ImagePicker from 'expo-image-picker'

// Importando o componente de QRCode
import QRCode from 'react-native-qrcode-svg';

// Definindo o componente Perfil
const Perfil = ({ navigation, route }) => {
    // Obtendo o id do pet das rotas
    const { petId } = route.params

    // Obtendo o usuário atual do Firebase Auth
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;

    // Definindo o estado inicial para o nome do pet, idade, descrição e imagem de perfil
    const [nomePet, setNomePet] = useState('');
    const [idade, setIdade] = useState('');
    let textoIdade = idade === 1 ? '1 ano' : `${idade} anos`;

    const [descr, setDescr] = useState('');
    const [imagemUrl, setImageUrl] = useState(null);

    // Definindo o estado inicial para o modal
    const [modalDescr, setModalDescr] = useState(false);

    // Definindo a referência para o documento do pet no Firestore
    const refence = doc(db, 'pet', petId);

    // Função para buscar os detalhes do pet no Firestore
    async function FetchPetDetails(petId) {
        try {
            const petRef = doc(db, 'pet', petId);
            const petSnapshot = await getDoc(petRef);
            if (petSnapshot.exists()) {
                const petData = petSnapshot.data();
                setNomePet(petData.Pet);
                setIdade(petData.idade);
                setDescr(petData.descricao);
            } else {
                console.log('No such pet!');
            }
        } catch (error) {
            console.error("Error fetching pet details: ", error);
        }
    }

    // Usando o hook useEffect para obter a URL da imagem de perfil quando o componente é montado
    useEffect(() => {
        const fetchImage = async () => {
            const storage = getStorage();
            const imageRef = ref(storage, `${uid}/${nomePet}/fotoPerfil/foto-perfil.png`);

            try {
                getDownloadURL(imageRef).then((uri) => {
                    setImageUrl(uri);
                });

            } catch (error) {
                console.error("Erro ao obter a URL da imagem:", error);
            }
        };

        fetchImage();
    });

    // Definindo o estado inicial para a descrição alternativa e a contagem de atualizações
const [altDescr, setAltDescr] = useState('');
const des = { descricao: altDescr }
const [updateCount, setUpdateCount] = useState(0);

// Usando o hook useEffect para buscar os detalhes do pet quando o componente é montado ou a contagem de atualizações muda
useEffect(() => {
    FetchPetDetails(petId);
}, [petId, updateCount]);

// Função para atualizar a descrição do pet no Firestore e incrementar a contagem de atualizações
function update() {
    updateDoc(refence, des);
    setUpdateCount(updateCount + 1);
    console.log(Date.now())
}

// Definindo a data do post e a referência para a imagem do post no Firebase Storage
const dataPost = Date.now()
const endereco = `${uid}/${nomePet}/fotoFeed/${dataPost}.png`
const refAdd = ref(storage, endereco);

// Função para adicionar uma nova imagem de post do dispositivo do usuário e fazer o upload para o Firebase Storage
const fotoadd = async () => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1
        });
        if (!result.cancelled) {
            // Busque a imagem e converta-a para Blob
            const response = await fetch(result.uri);
            const blob = await response.blob();

            // Faça o upload do Blob
            const snapshot = await uploadBytes(refAdd, blob);
            const imagemUrl = await getDownloadURL(snapshot.ref);

            // Adicione o documento ao Firestore
            const docRef = await addDoc(collection(db, 'post'), {
                uid: uid,
                Pet: nomePet,
                petId: petId,
                endereco: endereco,
                imagem: imagemUrl,
                data: dataPost
            });

            fetchPosts();
            console.log('Upload a blob or file!')
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// Definindo o estado inicial para os dados
const [data, setData] = useState([]);

// Função para buscar os posts do pet no Firestore
async function fetchPosts() {
    const q = query(collection(db, 'post'), where('petId', '==', petId));
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setData(posts);
}

// Usando o hook useEffect para buscar os posts do pet quando o componente é montado
useEffect(() => {
    fetchPosts();
}, []);

// Função para deletar um post do Firestore e a imagem correspondente do Firebase Storage
async function deletePost(postId, endereco) {
    // Deletar o documento do Firestore
    await deleteDoc(doc(db, 'post', postId));

    // Deletar o arquivo do Firebase Storage
    const refDelete = ref(storage, endereco);
    await deleteObject(refDelete);

    fetchPosts();
}

// Definindo o estado inicial para o modal
const [modal, setModal] = useState(false)

    return (
        <View style={{ height: '100%' }}>
        {/* Renderizando o modal para editar a descrição */}
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalDescr}
            >
            {/* Quando pressionado, o modal é fechado */}
                <Pressable style={{ width: '100%', height: '100%', }} onPress={() => setModalDescr(false)}><Text /></Pressable>
                <View style={PerfilStyle.modal}>
                    <View style={PerfilStyle.content}>
                    {/* Renderizando o campo de texto para editar a descrição */}
                        <TextInput style={PerfilStyle.descr}
                            editable
                            multiline
                            placeholder='Sobre o animal e informações relevantes'
                            onChangeText={(altDescr) => setAltDescr(altDescr)}
                            value={altDescr}
                        />
                        <View style={PerfilStyle.botoes}>
                        {/* Quando pressionado, o modal é fechado */}
                            <TouchableOpacity style={PerfilStyle.cancelar} onPress={() => setModalDescr(false)}>
                                <Text style={PerfilStyle.text}>Cancelar</Text>
                            </TouchableOpacity>

                        {/* Quando pressionado, a descrição é atualizada no Firestore e o modal é fechado */}
                            <TouchableOpacity style={PerfilStyle.salvar} onPress={update} onPressOut={() => setModalDescr(false)}>
                                <Text style={PerfilStyle.text}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Renderizando o cabeçalho */}
            <Header
                nome={nomePet}
                idade={textoIdade}
                descricao={descr}
                modal={() => setModalDescr(true)}
                imagem={imagemUrl}
                addImagem={fotoadd}
                qrcode={() => setModal(true)}
            />

            {/* Renderizando a lista de posts */}
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Post
                        pet={item.Pet}
                        fotoPost={item.endereco}
                        petImg={imagemUrl}
                        filePath={item.endereco}
                        deletarPost={() => deletePost(item.id, item.endereco)}
                    />
                )}
            />

            {/* Renderizando o modal para exibir o QR Code */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(!modal);
                }}
            >   
                <View style={PerfilStyle.qrCode}>
                    {/* Renderizando o QR Code */}
                    <QRCode 
                        id= 'Qrcode'
                        value= {`https://bypet-qrcode.vercel.app/pet/${petId}`}
                        size={325}
                    />
                </View>
            </Modal>

            {/* Renderizando o componente Paw */}
            <Paw
                home={() => navigation.navigate('Home')}
                config={() => navigation.navigate('Configurações')}
            />
        </View>
    )
}

export default Perfil;