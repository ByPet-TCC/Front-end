import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

const SeleGen = ({}) => {
    const [genero, setGen] = useState (null);

    const [select_male, setMale] = useState("");
    const [select_female, setFem] = useState("");

    const icons = {
        male: require('../../../assets/icons/genero/male.png'),
        male_selecionada: require('../../../assets/icons/genero/male_selecionada.png'),
        female: require('../../../assets/icons/genero/female.png'),
        female_selecionada: require('../../../assets/icons/genero/female_selecionada.png'),
      };

    const male = genero === 'male' ? 'male_selecionada' : 'male';
    const female = genero === 'female' ? 'female_selecionada' : 'female';
    
    return (
        <View style ={{}}>
            <Text style={style.TextoPerg}>
              Qual o sexo do Pet?
            </Text>
            <View style={style.seleRaca}>
                <Pressable style={style.botao} onPress={ () => setGen('male')}>
                    <Image source={icons[male]} style={style.img}/>
                </Pressable>

                <Pressable style={style.botao} onPress={ () => setGen('female')}>
                    <Image source={icons[female]} style={style.img}/>
                </Pressable>
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