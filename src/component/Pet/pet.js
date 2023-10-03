import React, { useState } from 'react';
import {Text, View, ScrollView, Pressable, TextInput, Image, ImageBackground, StyleSheet, modal} from 'react-native';


const NovoPet = ({ pet }) => {
    const [visivel, setVisivel] = useState(false);

    const[nomePet, setNomePet] = useState('');

        return (
            <View>
                <Pressable onPress={() => setVisivel(!visivel)} activeOpacity={1}>
                    <View style={style.pet}>
                    
                    </View>
                </Pressable>

                {visivel && (
                    <View style={style.petOn}>
                        <View style={style.boxBottom}>
                            <Text style={style.textPet}>{nomePet}</Text>
                            <Pressable>
                                <Text style={style.bottom}>
                                    Perfil
                                </Text>
                            </Pressable>
                             <Pressable>
                                <Text style={style.bottom}>
                                    Vacinas
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )};
            </View>
            )
};

const style = StyleSheet.create ({
    pet: {
        width: 175,
        height: 215,
        borderRadius: 25,
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 3.5, height: 3.5 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
    },

    petOn: {
        position: 'absolute',
        width: 175,
        height: 215,
        borderRadius: 25,
    },

    boxBottom: {
        padding: 3,
        rowGap: 5,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        borderRadius: 25,
    },

    textPet: {
        textAlign: 'center',
        fontFamily: 'khula',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 18,
        paddingBottom: 15,
    },

    bottom: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        color: 'white',
        pointerEvents: 'auto',
        backgroundColor: '#333030',
        padding: 15,
        textAlign: 'center'
    },

});

export default NovoPet;