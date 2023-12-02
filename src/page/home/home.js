// Importando os componentes necessários do React e React Native
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Pressable, Image, Modal, TouchableOpacity } from 'react-native';
import NovoPet from '../../component/Pet/pet';
import Paw from '../../component/Paw/paw';
import * as ImagePicker from 'expo-image-picker';

// Importando o estilo do componente Home
import HomeStyle from '../../style/home'

// Importando funções do Firebase para autenticação e armazenamento de dados
import { getAuth } from 'firebase/auth';
import { db, storage } from '../../services/firebase/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { useFocusEffect } from '@react-navigation/native';

// Definindo o componente Home
function Home({ navigation }) {
    // Obtendo o usuário atual do Firebase Auth
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;

    // Definindo as referências para as imagens de perfil e wallpaper no Firebase Storage
    const refPerfil = ref(storage, `${uid}/fotoUser/foto-perfil.png`);
    const refWall = ref(storage, `${uid}/fotoUser/foto-wall.png`);

    // Definindo o estado inicial para o nome do usuário, imagem de perfil, wallpaper, modal e dados
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [wallpaper, setWallpaper] = useState(null);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);

    // Usando o hook useEffect para obter as URLs das imagens de perfil e wallpaper quando o componente é montado
    useEffect(() => {
        getDownloadURL(refPerfil).then((url) => {
            setImage(url);
        }),
            getDownloadURL(refWall).then((uri) => {
                setWallpaper(uri);
            })
    }, []);

    // Se o usuário estiver autenticado, obtenha o nome do usuário do documento do usuário no Firestore
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

    // Função para selecionar uma nova imagem de perfil do dispositivo do usuário e fazer o upload para o Firebase Storage
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

    // Função para selecionar uma nova imagem de wallpaper do dispositivo do usuário e fazer o upload para o Firebase Storage
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

    // Função para buscar os pets do usuário atual no Firestore
    async function FetchPets() {
        const q = query(collection(db, 'pet'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const pets = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return pets;
    }

    // Usando o hook useFocusEffect para buscar os pets do usuário atual quando o foco é dado ao componente
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
                            {/* Se não houver wallpaper, renderize uma imagem em branco. Caso contrário, renderize a imagem do wallpaper */}
                            {wallpaper === null ? <Image style={{ height: '100%', width: '100%', backgroundColor: 'white', borderBottomRightRadius: 80, borderBottomLeftRadius: 80, borderWidth: 1 }} /> : <View>{wallpaper && <Image source={{ uri: wallpaper }} style={{ height: '100%', width: '100%', borderBottomRightRadius: 80, borderBottomLeftRadius: 80 }} />}</View>}
                        </View>
                        {/* Quando pressionado, o modal é aberto. Se não houver imagem de perfil, renderize uma imagem padrão. Caso contrário, renderize a imagem de perfil */}
                        <Pressable onPress={() => setModal(true)} style={HomeStyle.perfil}>
                            {image === null ? <Image source={require('../../../assets/perfilIcon.png')} style={{ height: '100%', width: '100%', borderRadius: 60 }} /> : <View>{image && <Image source={{ uri: image }} style={{ height: '100%', width: '100%', borderRadius: 60 }} />}</View>}
                        </Pressable>
                    </View>

                    {/* Renderizando o nome do usuário */}
                    <Text style={HomeStyle.text}>
                        Pet's {name}
                    </Text>

                    <View style={HomeStyle.content}>
                        {/* Quando pressionado, navegue para a página 'CadastroPet' */}
                        <Pressable onPress={() => navigation.push('CadastroPet')}>
                            <View style={[HomeStyle.novoPet, HomeStyle.sombra]}>
                                <Image source={require('../../../assets/add.png')} style={HomeStyle.add} />
                                <Text style={HomeStyle.textPetNovo}>Adicione um novo familiar</Text>
                            </View>
                        </Pressable>

                        {/* Renderizando a lista de pets */}
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
            {/* Renderizando o componente Paw */}
            <Paw
                config={() => navigation.navigate('Configurações')}
            />
            {/* Renderizando o modal */}
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
                    {/* Quando pressionado, a função fotoPerfil é chamada */}
                    <TouchableOpacity onPress={fotoPerfil} style={HomeStyle.bottomModal}>
                        <Text style={HomeStyle.textModal}>
                            Mudar foto de perfil
                        </Text>
                    </TouchableOpacity>
                    {/* Quando pressionado, a função fotoWallpaper é chamada */}
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