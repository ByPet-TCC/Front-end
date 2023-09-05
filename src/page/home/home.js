import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';
import HomeStyle from '../../style/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = (navigation) => {
    return(
        <ScrollView style={HomeStyle.container}>
            <View style={HomeStyle.desenho}>
                <View style={HomeStyle.perfil}/>
           </View>
            <Text style={HomeStyle.text}>
                Pet's 'Sobrenome usuario'
            </Text>

            <View style={HomeStyle.content}>    

                <View style={HomeStyle.novoPet}>
                    <Image source={require('../../../assets/add.png')} style={HomeStyle.add}/>
                    <Text style={HomeStyle.textPetNovo}>Adicione um novo familiar</Text>
                </View>


                <View style={HomeStyle.pet}>
                    <Text style={HomeStyle.textPet}>Nome PET</Text>
                </View>
                <View style={HomeStyle.pet}>
                    <Text style={HomeStyle.textPet}>Nome PET</Text>
                </View>
                <View style={HomeStyle.pet}>
                    <Text style={HomeStyle.textPet}>Nome PET</Text>
                </View>
                <View style={HomeStyle.pet}>
                    <Text style={HomeStyle.textPet}>Nome PET</Text>
                </View>
                <View style={HomeStyle.pet}>
                    <Text style={HomeStyle.textPet}>Nome PET</Text>
                </View>
                <View style={HomeStyle.pet}>
                    <Text style={HomeStyle.textPet}>Nome PET</Text>
                </View>
                <View style={HomeStyle.pet}>
                    <Text style={HomeStyle.textPet}>Nome PET</Text>
                </View>
                <View style={HomeStyle.pet}>
                    <Text style={HomeStyle.textPet}>Nome PET</Text>
                </View>
            </View>
            
                <View style={HomeStyle.paw}>
            
                </View>

        </ScrollView>
            
            
        
    )
}

export default Home;