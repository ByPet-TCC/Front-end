import React, { useState } from 'react';
import {Text, View, Pressable, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const Paw = () => {
    const [on, setOn] = useState(false);

    const scale = useSharedValue(1);
    const x = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }, { translateX: x.value }],
        };
    });

    return(
        <View style={style.paw}>
            <Animated.View style={animatedStyles}>
                <Image source={require('../../../assets/icons/Paw/home.png')} style={style.image}/>
            </Animated.View>
            <Image source={require('../../../assets/icons/Paw/calendar.png')} style={style.imageCalendar}/>
            <Image source={require('../../../assets/icons/Paw/help.png')} style={style.imageHelp}/>
            <Image source={require('../../../assets/icons/Paw/config.png')} style={style.imageConfig}/>

            <Pressable onPress={() => {
                scale.value = withTiming(on ? 1 : 0.8, { duration: 500 });
                x.value = withTiming(on ? 0 : -25, { duration: 500 });
                setOn(!on);
            }}>
                <Animated.View style={[style.paw, animatedStyles]}>
                    <Image source={require('../../../assets/icons/Paw/paw.png')} style={style.imagePaw}/>
                </Animated.View>
            </Pressable>
        </View>
    )
};

const style = StyleSheet.create({
    paw: {
        width: '135px',
        height: '135px',
        position: 'fixed',
        bottom: 35,
        right: 25,
    },
    
    imagePaw: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    image: {
        position: 'absolute',
        width: '80%',
        height: '80%',
    }
})

export default Paw;
