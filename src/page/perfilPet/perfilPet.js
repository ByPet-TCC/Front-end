import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, Modal, Pressable, TextInput, FlatList, TouchableOpacity, } from 'react-native';

import Header from '../../component/perfil/header';
import PerfilStyle from '../../style/perfilPet';
import Paw from '../../component/Paw/paw';
import Post from '../../component/perfil/post';

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore/lite';
import { db, storage } from '../../services/firebase/firebaseConfig';
import { ref, getStorage, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker'
import QRCode from 'react-native-qrcode-svg';

const Perfil = ({ navigation, route }) => {
    const { petId } = route.params

    const auth = getAuth();
    const user = auth.currentUser
    const uid = user.uid

    const [nomePet, setNomePet] = useState('');
    const [idade, setIdade] = useState('');
    let textoIdade = idade === 1 ? '1 ano' : `${idade} anos`;

    const [descr, setDescr] = useState('');
    const [imagemUrl, setImageUrl] = useState(null)

    const [modalDescr, setModalDescr] = useState(false);

    //

    const refence = doc(db, 'pet', petId)

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

    useEffect(() => {
        const fetchImage = async () => {
            const storage = getStorage();
            const imageRef = ref(storage, `${uid}/${nomePet}/fotoPerfil/foto-perfil.png`)

            try {
                getDownloadURL(imageRef).then((uri) => {
                    setImageUrl(uri);
                })

            } catch (error) {
                console.error("Erro ao obter a URL da imagem:", error);
            }
        };

        fetchImage();
    });

    //

    const [altDescr, setAltDescr] = useState('');
    const des = { descricao: altDescr }
    const [updateCount, setUpdateCount] = useState(0);

    useEffect(() => {
        FetchPetDetails(petId);
    }, [petId, updateCount]);

    function update() {
        updateDoc(refence, des);
        setUpdateCount(updateCount + 1);
        console.log(Date.now())
    }

    //
    const dataPost = Date.now()
    const endereco = `${uid}/${nomePet}/fotoFeed/${dataPost}.png`
    const refAdd = ref(storage, endereco);

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
    

    //

    const [data, setData] = useState([]);

    async function fetchPosts() {
        const q = query(collection(db, 'post'), where('petId', '==', petId));
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(posts);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    //
    async function deletePost(postId, endereco) {
        // Deletar o documento do Firestore
        await deleteDoc(doc(db, 'post', postId));

        // Deletar o arquivo do Firebase Storage
        const refDelete = ref(storage, endereco);
        await deleteObject(refDelete);

        fetchPosts();
    }

    const [modal, setModal] = useState(false)

    return (
        <View style={{ height: '100%' }}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalDescr}
            >
                <Pressable style={{ width: '100%', height: '100%', }} onPress={() => setModalDescr(false)}><Text /></Pressable>
                <View style={PerfilStyle.modal}>
                    <View style={PerfilStyle.content}>
                        <TextInput style={PerfilStyle.descr}
                            editable
                            multiline
                            placeholder='Sobre o animal e informações relevantes'
                            onChangeText={(altDescr) => setAltDescr(altDescr)}
                            value={altDescr}
                        />
                        <View style={PerfilStyle.botoes}>
                            <TouchableOpacity style={PerfilStyle.cancelar} onPress={() => setModalDescr(false)}>
                                <Text style={PerfilStyle.text}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={PerfilStyle.salvar} onPress={update} onPressOut={() => setModalDescr(false)}>
                                <Text style={PerfilStyle.text}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Header
                nome={nomePet}
                idade={textoIdade}
                descricao={descr}
                modal={() => setModalDescr(true)}
                imagem={imagemUrl}
                addImagem={fotoadd}
                qrcode={() => setModal(true)}
            />

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

            <Modal
                animationType="fade"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(!modal);
                }}
            >   
                <View style={PerfilStyle.qrCode}>
                    <QRCode 
                        id= 'Qrcode'
                        value= {`http://localhost:3000/pet/${petId}`}
                        size={325}
                        logo= {require('../../../assets/icons/Login/logo.png')}
                        logoSize={125}
                    />
                </View>
            </Modal>

            <Paw
                home={() => navigation.navigate('Home')}
                config={() => navigation.navigate('Configurações')}
            />
        </View>
    )
}

export default Perfil;