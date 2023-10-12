import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

const SeleGen = ({}) => {
    const [genero, setGen] = useState (null);

    const male = genero === 'male' ? 'male_selecionada.png' : 'male.png';
    const female = genero === 'female' ? 'female_selecionada.png' : 'female.png';
    
    return (
        <View>
            <Text style={style.TextoPerg}>
              Qual o sexo do Pet?
            </Text>
            <View style={style.seleRaca}>
<<<<<<< Updated upstream
                <Pressable style={style.img} onPress={ () => setGen('male')}>
                    <Image source={require (`../../../assets/icons/genero/${male}`)}/>
                </Pressable>

                <Pressable style={style.img} onPress={ () => setGen('female')}>
                    <Image source={require (`../../../assets/icons/genero/${female}`)}/>
=======
                <Pressable style={style.botao} onPress={ () => setGen('male')}>
                    <Image source={icons[male]} style={style.img}/>
                </Pressable>

                <Pressable style={style.botao} onPress={ () => setGen('female')}>
                    <Image source={icons[female]} style={style.img}/>
>>>>>>> Stashed changes
                </Pressable>
            </View>
        </View>
    );
};

const style = StyleSheet.create ({
    TextoPerg: {
        fontFamily: 'Poppins',
        color: '#008F8D',
        fontSize: 22,
        paddingLeft: '3%',
        paddingVertical: 5,
        marginTop: 15
    },

    seleRaca: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'space-evenly',
        width: '85%',
        flex: 1,
    },

    botao: {
        width: 100,
        height: 100
    },

    img: {
        height: '100%',
        width: '100%',
    },
})

export default SeleGen;