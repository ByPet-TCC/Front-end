import React, { useState, useEffect } from 'react';
import {Text, View, ScrollView, Pressable, TextInput, Image, ImageBackground, StyleSheet, modal} from 'react-native';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const NovoPet = ({ nomePet, fotoPet, perfil, vacina }) => {
    const [visivel, setVisivel] = useState(false);
    const [imagemUrl, setImageUrl] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
          const storage = getStorage();
          const imageRef = ref(storage, fotoPet)

          try {
            getDownloadURL(imageRef).then((uri) => {
                setImageUrl(uri);
            })

          } catch (error) {
            console.error("Erro ao obter a URL da imagem:", error);
          }
        };
    
        fetchImage();
      }, [fotoPet]);
      
        return (
            <View style={style.view}>
                <Pressable style={style.pet} onPress={() => setVisivel(!visivel)} activeOpacity={1}>
                    <ImageBackground style={style.image} source={{uri: imagemUrl }} />
                </Pressable>

                {visivel && (
                    <View style={style.petOn}>
                        <View style={style.boxBottom}>
                            <Text style={style.textPet}> 
                                {nomePet} 
                            </Text>
                            <Pressable style={style.bottom} onPress={perfil}>
                                <Text style={style.textbottom}>
                                    Perfil
                                </Text>
                            </Pressable>
                             <Pressable style={style.bottom} onPress={vacina}>
                                <Text style={style.textbottom}>
                                    Vacinas
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </View>
            )
};

const style = StyleSheet.create ({
    view: {
        
    },

    image:{
        width: '100%',
        height: '100%'
    },

    pet: {
        width: 140,
        height: 172,
        borderRadius: 15,
        overflow: 'hidden'
    },

    petOn: {
        position: 'absolute',
        width: 140,
        height: 172,
    },

    boxBottom: {
        display: 'flex',
        paddingVertical: 3,
        rowGap: 5,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        borderRadius: 17,
        alignContent: 'center',
        justifyContent: 'center'
    },

    textPet: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        height: '25%',
        width: '100%'
    },

    bottom: {
        backgroundColor: '#333030',
        width: '100%',
        height: '25%'
    },

    textbottom: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        width: '100%',
        height: '100%',
    },

    sombra: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#0000',
    },
});

export default NovoPet;