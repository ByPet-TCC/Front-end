import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

const SeleRaca = ({}) => {
    const [raca, setRaca] = useState (null);

    const dog = raca === 'dog' ? 'dog_selecionada.png' : 'dog.png';
    const cat = raca === 'cat' ? 'cat_selecionada.png' : 'cat.png';
    const hamster = raca === 'hamster' ? 'hamster_selecionada.png' : 'hamster.png';
    const rabit = raca === 'rabit' ? 'rabit_selecionada.png' : 'rabit.png';
    
    return (
        <View style ={{}}>
            <Text style={style.TextoPerg}>
              Selecione a especie
            </Text>
            <View style={style.seleRaca}>
                <Pressable style={style.img} onPress={ () => setRaca('dog')}>
                    <Image source={require (`../../../assets/icons/dog/${dog}`)}/>
                </Pressable>

                <Pressable style={style.img} onPress={ () => setRaca('cat')}>
                    <Image source={require (`../../../assets/icons/cat/${cat}`)}/>
                </Pressable>

                <Pressable style={style.img} onPress={ () => setRaca('hamster')}>
                    <Image source={require (`../../../assets/icons/hamster/${hamster}`)}/>
                </Pressable>

                <Pressable style={style.img} onPress={ () => setRaca('rabit')}>
                    <Image source={require (`../../../assets/icons/rabit/${rabit}`)}/>
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

    img: {
        display: 'grid',
        minHeight: 75,
        minWidth: 75,
        maxHeight: '100%',
        maxWidth: '100%',
        margin: 15
    },
})

export default SeleRaca;