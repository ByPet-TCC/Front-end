import React, { useState } from 'react';
import {Text, View, Image, Modal, TouchableOpacity, ScrollView, Animated, Dimensions, ImageBackground } from 'react-native';
import NovaVacina from '../../component/vacina/vacina';
import VacinaStyle from '../../style/vacina';

const Vacina = ({navigation}) => {
    const [nomePet, setNomePet] = useState('')

    return(
        <ImageBackground source={require('../../../assets/icons/addVacina/backgroundVacina.png')} style={VacinaStyle.ImageBackground}>
            <View style={VacinaStyle.content}>
                <View style={VacinaStyle.header}>
                    <Text style={VacinaStyle.text}>
                        Carteira digital do Afonso {nomePet}
                    </Text>
                </View>
                <ScrollView style={VacinaStyle.menu}>
                <NovaVacina/>
                </ScrollView>
                <TouchableOpacity style={VacinaStyle.pBotton}>
                    <Image source={require('../../../assets/icons/addVacina/addVacina.png')} style={VacinaStyle.botton}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Vacina;