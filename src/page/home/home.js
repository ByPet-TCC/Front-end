import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView, Pressable, Image, ImageBackground, StyleSheet, FlatList } from 'react-native';
import NovoPet from '../../component/Pet/pet';
import Paw from '../../component/Paw/paw';

import HomeStyle from '../../style/home'

const Home = ({navigation}) => {
    const [pet, setPet] = useState([]);

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setPet(data));
    },[]);

    return(
        <View style={HomeStyle.container}>
            <ScrollView>
                <View style={HomeStyle.desenho}>
                    <View style={HomeStyle.perfil}/>
                </View>

                <Text style={HomeStyle.text}>
                    Pet's 'Sobrenome usuario'
                </Text>

                <View style={HomeStyle.content}>    
                    <Pressable onPress={ () => navigation.push('CadastroPet') }>
                        <View style={HomeStyle.novoPet}>
                            <Image source={require('../../../assets/add.png')} style={HomeStyle.add}/>
                            <Text style={HomeStyle.textPetNovo}>Adicione um novo familiar</Text>
                    </View>
                    </Pressable>

                    

                    <NovoPet />
                    <NovoPet /><NovoPet /><NovoPet /><NovoPet />
                </View>
            </ScrollView>

            <Paw></Paw>
            

        </View>
            
        
    )
}

export default Home;