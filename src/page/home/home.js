import React from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';
import HomeStyle from '../../style/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = (navigation) => {
    return(
        <View style={HomeStyle.container}>
            <View style={HomeStyle.desenho}>
                <View style={HomeStyle.perfil}>

                </View>
            </View>
        </View>
    )
}

export default Home;