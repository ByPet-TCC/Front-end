import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import HomeStyle from '../../style/home';

const Home = ({navigation}) => {
    return(
        <ScrollView style={HomeStyle.container}>
            <View style={HomeStyle.desenho}>
                <View style={HomeStyle.perfil}/>
           </View>
            <Text style={HomeStyle.text}>
                Pet's 'Sobrenome usuario'
            </Text>

            <View style={HomeStyle.content}>    
                <TouchableOpacity onPress={ () => navigation.push('CadastroPet') }>
                    <View style={HomeStyle.novoPet}>
                        <Image source={require('../../../assets/add.png')} style={HomeStyle.add}/>
                        <Text style={HomeStyle.textPetNovo}>Adicione um novo familiar</Text>
                </View>
                </TouchableOpacity>

                <View style={HomeStyle.pet}>
                    <View style={HomeStyle.boxBottom}>
                        <Text style={HomeStyle.textPet}>Nome PET</Text>
                        <TouchableOpacity>
                            <Text style={HomeStyle.bottom}>
                                Perfil
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={HomeStyle.bottom}>
                                Vacinas
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={HomeStyle.pet}>
                    <Text style={HomeStyle.textPet}>Nome PET</Text>
                </View>
            </View>
            
                <TouchableOpacity style={HomeStyle.paw}>
            
                </TouchableOpacity>

        </ScrollView>
            
            
        
    )
}

export default Home;