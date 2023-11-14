import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView, Pressable, Image, ImageBackground, StyleSheet, FlatList } from 'react-native';
import NovoPet from '../../component/Pet/pet';
import Paw from '../../component/Paw/paw';
import Cadastro from '../cadPet/cadastroPet';

import HomeStyle from '../../style/home'

const Home = ({navigation}) => {
    const [usuario, setUsuario] = useState('');
    const [data, setData] = useState([
        {key: 1, pet: 'Rex' },
        {key: 2, pet: 'Rose'},
    ]);

    return(
        <View style={HomeStyle.container}>
            <ScrollView>
                <ScrollView style={HomeStyle.scrollView}>
                    <View style={HomeStyle.desenho}>
                        <View style={HomeStyle.perfil}/>
                    </View>

                    <Text style={HomeStyle.text}>
                        Pet's {usuario}
                    </Text>

                    <View style={HomeStyle.content}>    
                        <Pressable onPress={ () => navigation.push('CadastroPet') }>
                            <View style={[HomeStyle.novoPet, HomeStyle.sombra]}>
                                <Image source={require('../../../assets/add.png')} style={HomeStyle.add}/>
                                <Text style={HomeStyle.textPetNovo}>Adicione um novo familiar</Text>
                            </View>
                        </Pressable>
                        {data.map((item) => (
                            <NovoPet nomePet={item.pet} fotoPet={item.fotoPet} perfil={() => navigation.navigate('Perfil Pet')} vacina={() => navigation.navigate('Carteira de vacina')}/> 
                    ))}

                    </View>
                </ScrollView>
            </ScrollView>
            <Paw
                config={() => navigation.navigate('Configurações')}
            />

        </View>    
        
    )
}

export default Home;