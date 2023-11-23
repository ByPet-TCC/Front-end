import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView, Pressable, Image, Modal, TouchableOpacity } from 'react-native';
import NovoPet from '../../component/Pet/pet';
import Paw from '../../component/Paw/paw';
import * as ImagePicker from 'expo-image-picker';

import HomeStyle from '../../style/home'
import { getAuth } from 'firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import { storage } from '../../services/firebase/firebaseConfig';
import { ref, uploadBytesResumable } from 'firebase/storage';

function Home ({navigation}) {
    const auth = getAuth();
    const user = auth.currentUser
    const uid = user.uid;
    

    const [image, setImage] = useState(null);
    const [wallpaper, setWallpaper] = useState(null);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);

    const fotoPerfil = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1
          }); 
          if (!result.canceled) {
            setImage(result.uri);
          }
      };

      const fotoWallpaper = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1
          }); 
          if (!result.canceled) {
            setWallpaper(result.uri);
          }
      };

    return(
        <View style={HomeStyle.container}>
            <ScrollView>
                <ScrollView style={HomeStyle.scrollView}>
                    <View style={HomeStyle.desenho}>
                        <View style={HomeStyle.wallpaper}>
                            {wallpaper === null ? <Image style={{height: '100%', width: '100%', backgroundColor: 'white', borderBottomRightRadius: 80, borderBottomLeftRadius: 80, borderWidth: 1}} /> :  <View>{wallpaper && <Image source={{ uri: wallpaper }} style={{height: '100%', width: '100%', borderBottomRightRadius: 80, borderBottomLeftRadius: 80}}  /> }</View>}
                        </View>
                        <Pressable onPress={() => setModal(true)} style={HomeStyle.perfil}>
                            {image === null ? <Image source={require('../../../assets/perfilIcon.png')} style={{height: '100%', width: '100%', borderRadius: 60}} /> :  <View>{image && <Image source={{ uri: image }} style={{height: '100%', width: '100%', borderRadius: 60}}  /> }</View>}
                        </Pressable>
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
            <Modal 
                animationType='slide'
                transparent={true}
                visible={modal}
            >
                <Pressable 
                    onPress={() => setModal(false)}
                    style={HomeStyle.modal}
                >
                    <Text />
                </Pressable>
                <View style={HomeStyle.viewModal}>
                    <TouchableOpacity onPress={fotoPerfil} style={HomeStyle.bottomModal}>
                        <Text style={HomeStyle.textModal}>
                            Mudar foto de perfil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={fotoWallpaper} style={HomeStyle.bottomModal}>
                        <Text style={HomeStyle.textModal}>
                            Mudar papel de parede
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>    
        
    )
}

export default Home;