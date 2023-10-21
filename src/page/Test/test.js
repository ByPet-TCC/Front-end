import React, { useState } from 'react';
import {Text, View, Image, ImageBackground, StyleSheet, Pressable, TouchableHighlight, Modal} from 'react-native';
import IndexStyle from '../../style';

const Test = ({navigation}) => {
    return (
        <View style={{height: '100%', width: '100%'}}>
            <View style={style.paw}>
                <Pressable style={style.imageHome}>
                    <Image source={require('../../../assets/icons/Paw/home.png')} style={style.image}/>
                </Pressable>

                <Pressable style={style.imageCalendar}>
                    <Image source={require('../../../assets/icons/Paw/calendar.png')} style={style.image}/>
                </Pressable>

                <Pressable style={style.imageHelp}>
                    <Image source={require('../../../assets/icons/Paw/help.png')} style={style.image}/>
                </Pressable>

                <Pressable style={style.imageConfig}>
                    <Image source={require('../../../assets/icons/Paw/config.png')} style={style.image}/>
                </Pressable>

                <Pressable style={style.imagePaw}>
                        <Image source={require('../../../assets/icons/Paw/paw.png')} style={style.image}/>
                </Pressable>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    paw: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom: 15,
        right: 15
    },
    
    image: {
        width: '100%',
        height: '100%',
    },

    imagePaw: {
        width: 135,
        height: 135,
    },

    imageConfig: {
        width: 63.45,
        height: 63.45,
        position: 'absolute',
        bottom: 5,
        right: 150
    },

    imageHelp: {
        width: 63.45,
        height: 63.45,
        position: 'absolute',
        bottom: 70,
        right: 140
    },

    imageCalendar: {
        width: 63.45,
        height: 63.45,
        position: 'absolute',
        bottom: 123,
        right: 100
    },

    imageHome: {
        width: 63.45,
        height: 63.45,
        position: 'absolute',
        bottom: 135,
        right: 33
    },
})

export default Test;