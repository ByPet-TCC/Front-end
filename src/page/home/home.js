import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Pressable, Image, Modal, TouchableOpacity } from 'react-native';
import NovoPet from '../../component/Pet/pet';
import Paw from '../../component/Paw/paw';
import * as ImagePicker from 'expo-image-picker';

import HomeStyle from '../../style/home'
import { getAuth } from 'firebase/auth';
import { db, storage } from '../../services/firebase/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { useFocusEffect } from '@react-navigation/native';

function Home({ navigation }) {
    const auth = getAuth();
    const user = auth.currentUser
    const uid = user.uid;

    const refPerfil = ref(storage, `${uid}/fotoUser/foto-perfil.png`);
    const refWall = ref(storage, `${uid}/fotoUser/foto-wall.png`);

    const [name, setName] = useState('')
    const [image, setImage] = useState(null);
    const [wallpaper, setWallpaper] = useState(null);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getDownloadURL(refPerfil).then((url) => {
            setImage(url);
        }),
            getDownloadURL(refWall).then((uri) => {
                setWallpaper(uri);
            })
    }, []);

    if (user) {
        const docRef = doc(db, 'users', user.uid);
        getDoc(docRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                setName(data.name)
            } else {
            }
        }).catch((error) => {
            console.log("Erro ao obter o documento:", error);
        });
    }


    const fotoPerfil = async () => {
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
            uploadBytes(refPerfil, blob)
                .then((snapshot) => {
                    console.log('Upload a blob or file!')
                }).catch((error) => {
                    console.log(error.message);
                })
            setImage(result.uri);
        }
    };

    const fotoWallpaper = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1
        });
        if (!result.canceled) {
            // Busque a imagem e converta-a para Blob
            const response = await fetch(result.uri);
            const blob = await response.blob();

            // Faça o upload do Blob
            uploadBytes(refWall, blob)
                .then((snapshot) => {
                    console.log('Upload a blob or file!')
                }).catch((error) => {
                    console.log(error.message);
                })
            setWallpaper(result.uri);
        }
    };

    async function FetchPets() {
        const q = query(collection(db, 'pet'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const pets = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return pets;
    }

    useFocusEffect(
        React.useCallback(() => {
            FetchPets().then(pets => {
                setData(pets);
            });
        }, [])
    );


    return (
        <View style={HomeStyle.container}>
            <ScrollView>
                <ScrollView style={HomeStyle.scrollView}>
                    <View style={HomeStyle.desenho}>
                        <View style={HomeStyle.wallpaper}>
                            {wallpaper === null ? <Image style={{ height: '100%', width: '100%', backgroundColor: 'white', borderBottomRightRadius: 80, borderBottomLeftRadius: 80, borderWidth: 1 }} /> : <View>{wallpaper && <Image source={{ uri: wallpaper }} style={{ height: '100%', width: '100%', borderBottomRightRadius: 80, borderBottomLeftRadius: 80 }} />}</View>}
                        </View>
                        <Pressable onPress={() => setModal(true)} style={HomeStyle.perfil}>
                            {image === null ? <Image source={require('../../../assets/perfilIcon.png')} style={{ height: '100%', width: '100%', borderRadius: 60 }} /> : <View>{image && <Image source={{ uri: image }} style={{ height: '100%', width: '100%', borderRadius: 60 }} />}</View>}
                        </Pressable>
                    </View>

                    <Text style={HomeStyle.text}>
                        Pet's {name}
                    </Text>

                    <View style={HomeStyle.content}>
                        <Pressable onPress={() => navigation.push('CadastroPet')}>
                            <View style={[HomeStyle.novoPet, HomeStyle.sombra]}>
                                <Image source={require('../../../assets/add.png')} style={HomeStyle.add} />
                                <Text style={HomeStyle.textPetNovo}>Adicione um novo familiar</Text>
                            </View>
                        </Pressable>

                        {data.map((item) => (
                            <NovoPet
                                nomePet={item.Pet}
                                key={item.id}
                                fotoPet={item.endereco}
                                perfil={() => navigation.navigate('Perfil Pet', { petId: item.id })}
                                vacina={() => navigation.navigate('Carteira de vacina', { petId: item.id })}
                            />
                        ))}


                    </View>
                </ScrollView>
            </ScrollView>
            <Paw
                config={() => navigation.navigate('Configurações')}
            />
            <Modal
                animationType='slide'
                transparent={true}
                visible={modal}
            >
                <Pressable
                    onPress={() => setModal(false)}
                    style={HomeStyle.modal}
                >
                    <Text />
                </Pressable>
                <View style={HomeStyle.viewModal}>
                    <TouchableOpacity onPress={fotoPerfil} style={HomeStyle.bottomModal}>
                        <Text style={HomeStyle.textModal}>
                            Mudar foto de perfil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={fotoWallpaper} style={HomeStyle.bottomModal}>
                        <Text style={HomeStyle.textModal}>
                            Mudar papel de parede
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>

    )
}

export default Home;