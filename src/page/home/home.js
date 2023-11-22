import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView, Pressable, Image,} from 'react-native';
import NovoPet from '../../component/Pet/pet';
import Paw from '../../component/Paw/paw';

import HomeStyle from '../../style/home'
import { getAuth } from 'firebase/auth';
import { firebase } from '@react-native-firebase/auth';

function Home ({navigation}) {
    const auth = getAuth();
    const user = auth.currentUser
    const uid = firebase.auth().currentUser.uid;

    const [data, setData] = useState([
    ]);

    return(
        <View style={HomeStyle.container}>
            <ScrollView>
                <ScrollView style={HomeStyle.scrollView}>
                    <View style={HomeStyle.desenho}>
                        <View style={HomeStyle.perfil}/>
                    </View>

                    <Text style={HomeStyle.text}>
                        Pet's {user.displayName}
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