// Importando os módulos necessários do React Native
import React, { useState } from 'react';
import {Text, View, Pressable, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

// Componente Paw
const Paw = ({ home, calendar, help, config}) => {
    // Definindo o estado inicial do menu
    const [on, setOn] = useState(false);

    // Retornando o componente Paw
    return(
        <View style={style.paw}>
            {/* Botão Home */}
            <Pressable style={style.imageHome} onPress={home}>
                <Image source={require('../../../assets/icons/Paw/home.png')} style={style.image}/>
            </Pressable>

            {/* Botão Calendário */}
            <Pressable style={style.imageCalendar} onPress={calendar}>
                <Image source={require('../../../assets/icons/Paw/calendar.png')} style={[style.image, {opacity: .7}]}/>
            </Pressable>

            {/* Botão Ajuda */}
            <Pressable style={style.imageHelp} onPress={help}>
                <Image source={require('../../../assets/icons/Paw/help.png')} style={[style.image, {opacity: .7}]}/>
            </Pressable>

            {/* Botão Configurações */}
            <Pressable style={style.imageConfig} onPress={config}>
                <Image source={require('../../../assets/icons/Paw/config.png')} style={style.image}/>
            </Pressable>

            {/* Botão Paw */}
            <Pressable style={style.imagePaw}>
                <Image source={require('../../../assets/icons/Paw/paw.png')} style={style.image}/>
            </Pressable>
        </View>
    )
};

// Definindo os estilos do componente
const style = StyleSheet.create({
    paw: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom: 15,
        right: 0
    },
    
    image: {
        width: '100%',
        height: '100%',
    },
    
    imagePaw: {
        width: 135,
        height: 135,
    },
    
    imageHome: {
        width: 63.45,
        height: 63.45,
        position: 'absolute',
        bottom: 5,
        right: 147
    },

    imageCalendar: {
        width: 63.45,
        height: 63.45,
        position: 'absolute',
        bottom: 72,
        right: 142
    },

    imageHelp: {
        width: 63.45,
        height: 63.45,
        position: 'absolute',
        bottom: 120,
        right: 98
    },

    imageConfig: {
        width: 63.45,
        height: 63.45,
        position: 'absolute',
        bottom: 133,
        right: 35
    },
})

// Exportando o componente Paw
export default Paw;
