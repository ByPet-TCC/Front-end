import React, { useState } from 'react';
import {Text, View, Pressable, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const Paw = () => {
    const [on, setOn] = useState(false);

    return(
        <View style={style.paw}>
            <Image source={require('../../../assets/icons/Paw/home.png')} style={style.imageHome}/>
            <Image source={require('../../../assets/icons/Paw/calendar.png')} style={style.imageCalendar}/>
            <Image source={require('../../../assets/icons/Paw/help.png')} style={style.imageHelp}/>
            <Image source={require('../../../assets/icons/Paw/config.png')} style={style.imageConfig}/>

            <Pressable style={style.paw}>
                    <Image source={require('../../../assets/icons/Paw/paw.png')} style={style.imagePaw}/>
                
            </Pressable>
        </View>
    )
};

const style = StyleSheet.create({
    paw: {
        maxWidth: '40%',
        width: '125px',
        height: '125px',
        position: 'fixed',
        bottom: 35,
        right: 25,
    },
    
    imagePaw: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    imageConfig: {
        position: 'absolute',
        width: '47%',
        height: '47%',
        bottom: 125,
        right: 15
    },

    imageHelp: {
        position: 'absolute',
        width: '47%',
        height: '47%',
        bottom: 115,
        right: 72
    },

    imageCalendar: {
        position: 'absolute',
        width: '47%',
        height: '47%',
        bottom: 77,
        right: 117
    },

    imageHome: {
        position: 'absolute',
        width: '47%',
        height: '47%',
        bottom: 17,
        right: 130
    },
})

export default Paw;
