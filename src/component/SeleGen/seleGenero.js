import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

const SeleGen = ({ seleGen }) => {
    const [genero, setGen] = useState (null);

    const handlePress = (genero) => {
        setGen(genero);
        seleGen(genero);
    }

    const icons = {
        male: require('../../../assets/icons/genero/male.png'),
        male_selecionada: require('../../../assets/icons/genero/male_selecionada.png'),
        female: require('../../../assets/icons/genero/female.png'),
        female_selecionada: require('../../../assets/icons/genero/female_selecionada.png'),
      };

    const male = genero === 'Macho' ? 'male_selecionada' : 'male';
    const female = genero === 'Fêmea' ? 'female_selecionada' : 'female';
    
    return (
        <View style ={{}}>
            <Text style={style.TextoPerg}>
              Qual o sexo do Pet?
            </Text>
            <View style={style.seleRaca}>
                <TouchableOpacity style={style.botao} onPress={ () => handlePress('Macho')}>
                    <Image source={icons[male]} style={style.img}/>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao} onPress={ () => handlePress('Fêmea')}>
                    <Image source={icons[female]} style={style.img}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create ({
    TextoPerg: {
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
        flex: 1,
    },

    botao: {
        minHeight: 75,
        minWidth: 75,
        maxWidth: '33%',
    },

    img: {
        width: '100%',
        height: '100%'
    },
})

export default SeleGen;