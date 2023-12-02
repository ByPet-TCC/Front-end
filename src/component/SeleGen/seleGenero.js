// Importando os módulos necessários do React Native
import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

// Componente SeleGen
const SeleGen = ({ seleGen }) => {
    // Definindo o estado inicial do gênero
    const [genero, setGen] = useState (null);

    // Função para lidar com a seleção do gênero
    const handlePress = (genero) => {
        setGen(genero);
        seleGen(genero);
    }

    // Definindo os ícones
    const icons = {
        male: require('../../../assets/icons/genero/male.png'),
        male_selecionada: require('../../../assets/icons/genero/male_selecionada.png'),
        female: require('../../../assets/icons/genero/female.png'),
        female_selecionada: require('../../../assets/icons/genero/female_selecionada.png'),
      };

    // Definindo qual ícone usar com base no gênero selecionado
    const male = genero === 'Macho' ? 'male_selecionada' : 'male';
    const female = genero === 'Fêmea' ? 'female_selecionada' : 'female';
    
    // Retornando o componente SeleGen
    return (
        <View style ={{}}>
            <Text style={style.TextoPerg}>
              Qual o sexo do Pet?
            </Text>
            <View style={style.seleRaca}>
                {/* Botão para selecionar o gênero Macho */}
                <TouchableOpacity style={style.botao} onPress={ () => handlePress('Macho')}>
                    <Image source={icons[male]} style={style.img}/>
                </TouchableOpacity>

                {/* Botão para selecionar o gênero Fêmea */}
                <TouchableOpacity style={style.botao} onPress={ () => handlePress('Fêmea')}>
                    <Image source={icons[female]} style={style.img}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Definindo os estilos do componente
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

// Exportando o componente SeleGen
export default SeleGen;