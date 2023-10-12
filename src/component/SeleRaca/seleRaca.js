import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

const SeleRaca = ({}) => {
    const [raca, setRaca] = useState (null);

    const icons = {
        dog: require('../../../assets/icons/dog/dog.png'),
        dog_selecionada: require('../../../assets/icons/dog/dog_selecionada.png'),
        cat: require('../../../assets/icons/cat/cat.png'),
        cat_selecionada: require('../../../assets/icons/cat/cat_selecionada.png'),
        hamster: require('../../../assets/icons/hamster/hamster.png'),
        hamster_selecionada: require('../../../assets/icons/hamster/hamster_selecionada.png'),
        rabit: require('../../../assets/icons/rabit/rabit.png'),
        rabit_selecionada: require('../../../assets/icons/rabit/rabit_selecionada.png'),
      };

    const dog = raca === 'dog' ? 'dog_selecionada' : 'dog';
    const cat = raca === 'cat' ? 'cat_selecionada' : 'cat';
    const hamster = raca === 'hamster' ? 'hamster_selecionada' : 'hamster';
    const rabit = raca === 'rabit' ? 'rabit_selecionada' : 'rabit';
    
    return (
        <View style ={{}}>
            <Text style={style.TextoPerg}>
              Selecione a especie
            </Text>
            <View style={style.seleRaca}>
                <Pressable style={style.botao} onPress={ () => setRaca('dog')}>
                    <Image source={icons[dog]} style={style.img}/>
                </Pressable>

                <Pressable style={style.botao} onPress={ () => setRaca('cat')}>
                    <Image source={icons[cat]} style={style.img}/>
                </Pressable>

                <Pressable style={style.botao} onPress={ () => setRaca('hamster')}>
                    <Image source={icons[hamster]} style={style.img}/>
                </Pressable>

                <Pressable style={style.botao} onPress={ () => setRaca('rabit')}>
                    <Image source={icons[rabit]} style={style.img}/>
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
        padding: '15',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflow: 'auto',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '95%',
        flex: 1
    },

    botao: {
        minHeight: 85,
        minWidth: 85,
        maxWidth: '33%',
    },

    img: {
        width: '100%',
        height: '100%'
    },
})

export default SeleRaca;