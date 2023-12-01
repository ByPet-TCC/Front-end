import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Modal, Pressable } from 'react-native';
import { storage } from '../../services/firebase/firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');


const Post = ({ pet, petImg, tutor, fotoPost, deletarPost}) => {
    const auth = getAuth();
    const user = auth.currentUser
    const uid = user.uid;

    const [imagemUser, setImagemUser] = useState(null)
    const [imagemPost, setImagePost] = useState(null)
    const refPerfil = ref(storage, `${uid}/fotoUser/foto-perfil.png`);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Deletar'];


    useEffect(() => {
        const fetchImage = async () => {
            const imageRef = ref(storage, fotoPost);

            try {
                const uri = await getDownloadURL(imageRef);
                setImagePost(uri);
                getDownloadURL(refPerfil).then((url) => {
                    setImagemUser(url);
                });
            } catch (error) {
                console.error("Erro ao obter a URL da imagem:", error);
            }
        };
        fetchImage();
    }, [fotoPost]);


    return (
        <View style={styles.post}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <View style={styles.menuTitulo}>
                    <View style={styles.imageGr}>
                        <Image source={{ uri: petImg }} style={styles.imgGr} />
                        <View style={styles.imagePq}>
                            <Image source={{ uri: imagemUser }} style={styles.imgGr} />
                        </View>
                    </View>
                    <View style={styles.viewTitulo}>
                        <Text style={styles.titulo}>
                            {pet}
                        </Text>
                    </View>
                </View>
                <View style={{ height: 45, width: 45, alignSelf: 'center', marginHorizontal: 25 }}>
                    <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                        <Image source={require('../../../assets/icons/menuIcon.png')} style={styles.img} />
                    </TouchableOpacity>
                    {isOpen && (
                        <View style={styles.dropdownMenu}>
                            {options.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.dropdownOption}
                                    onPress={() => {
                                        setIsOpen(false);
                                        setModalVisivel(true);
                                    }}
                                >
                                    <Text style={styles.dropdownOptionText}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>

            </View>
            <View style={styles.fotoPost}>
                <Image source={{ uri: imagemPost }} style={styles.img} />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => {
                    setModalVisivel(!modalVisivel);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Tem certeza de que deseja deletar?</Text>
                        <View style={styles.modalBottom}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisivel(!modalVisivel)}
                            >
                                <Text style={styles.textStyle}>Não</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPressOut={() => {
                                    setModalVisivel(!modalVisivel);
                                }}
                                onPress={deletarPost}
                            >
                                <Text style={styles.textStyle}>Sim</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    post: {
        alignSelf: 'center',
        backgroundColor: 'white',
        marginVertical: 5,

        width: '100%',
        maxWidth: 500
    },

    menuTitulo: {
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },

    img: {
        width: '100%',
        height: '100%'
    },

    imgGr: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },

    imageGr: {
        width: 65,
        height: 65,
        borderRadius: 100,
        borderWidth: 1,
    },

    imagePq: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: 'white',

        bottom: -10,
        right: -10
    },

    viewTitulo: {
        paddingHorizontal: 15,
    },

    titulo: {
        fontSize: 20
    },

    fotoPost: {
        alignSelf: 'center',
        width: '90%',
        maxWidth: 450,
        height: height * .65,
        borderRadius: 7.5,
        marginBottom: 85,
    },

    dropdownMenu: {
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

        width: 90,
        height: 60,
        zIndex: 1,
        position: 'absolute',
        right: 5,
        bottom: -65
    },

    dropdownOptionText: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    centeredView: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.15)'
    },

    modalView: {
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 15,
        paddingVertical: 15
    },

    modalText: {
        textAlign: 'center',
        fontSize: 28,
        margin: 25
    },

    modalBottom: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },  

    button: {
        padding: 5
    },  

    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 3
    },
})

export default Post;