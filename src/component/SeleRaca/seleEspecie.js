import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

const SeleEspecie = ({ seleEspecie }) => {
    const [especie, setEspecie] = useState (null);

    const handlePress = (novaEspecie) => {
        setEspecie(novaEspecie);
        seleEspecie(novaEspecie);
      };

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

    const dog = especie === 'Cachorro' ? 'dog_selecionada' : 'dog';
    const cat = especie === 'Gato' ? 'cat_selecionada' : 'cat';
    const hamster = especie === 'Hamster' ? 'hamster_selecionada' : 'hamster';
    const rabit = especie === 'Coelho' ? 'rabit_selecionada' : 'rabit';
    
    return (
        <View style ={{}}>
            <Text style={style.TextoPerg}>
              Selecione a especie
            </Text>
            <View style={style.seleEspecie}>
                <TouchableOpacity style={style.botao} onPress={ () => handlePress('Cachorro')}>
                    <Image source={icons[dog]} style={style.img}/>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao} onPress={ () => handlePress('Gato')}>
                    <Image source={icons[cat]} style={style.img}/>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao} onPress={ () => handlePress('Hamster')}>
                    <Image source={icons[hamster]} style={style.img}/>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao} onPress={ () => handlePress('Coelho')}>
                    <Image source={icons[rabit]} style={style.img}/>
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

    seleEspecie: {
        padding: 15,
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
        minHeight: 75,
        minWidth: 75,
        maxWidth: '33%',
    },

    img: {
        width: '100%',
        height: '100%'
    },
})

export default SeleEspecie;