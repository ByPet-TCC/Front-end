import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

const SeleGen = ({}) => {
    const [genero, setGen] = useState (null);

    const male = genero === 'male' ? 'male_selecionada.png' : 'male.png';
    const female = genero === 'female' ? 'female_selecionada.png' : 'female.png';
    
    return (
        <View style ={{}}>
            <Text style={style.TextoPerg}>
              Qual o sexo do Pet?
            </Text>
            <View style={style.seleRaca}>
                <Pressable style={style.img} onPress={ () => setGen('male')}>
                    <Image source={require (`../../../assets/icons/genero/${male}`)}/>
                </Pressable>

                <Pressable style={style.img} onPress={ () => setGen('female')}>
                    <Image source={require (`../../../assets/icons/genero/${female}`)}/>
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
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflow: 'auto',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '95%',
        flex: 1
    },

    img: {
        display: 'grid',
        minHeight: 75,
        minWidth: 75,
        maxHeight: '100%',
        maxWidth: '100%',
        margin: 15
    },
})

export default SeleGen;