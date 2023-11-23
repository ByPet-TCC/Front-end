import React, { useState, useEffect } from 'react';
import { Image, View, Text , TouchableOpacity, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SeletorPerfil = ({ setUriImagem }) => {
  const [image, setImage] = useState(null);

  const handlePress = (image) => {
    setImage(image);
    setUriImagem(image);
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1
      }); 
      if (!result.canceled) {
        handlePress(result.uri);
      }
  };

  return (
    <View style={style.content}>
        <Text style={style.title}>Foto de Perfil</Text>
            {image === null ? <Image source={require('../../../assets/icons/addPicture/addPicture.png')} style={style.perfil} /> :  <View>{image && <Image source={{ uri: image }} style={style.perfil} /> }</View>}
        <TouchableOpacity style={style.bottom} onPress={takePhoto}>
        <Text style={style.text}>
            Carregar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create ({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 28,
        color: '#008F8D'
    },

    perfil: {
        width: 180,
        height: 180,
        borderRadius: 15,
        margin: 20
    },

    bottom: {
        borderRadius: 50,
        backgroundColor: 'rgba(15, 194, 191, 0.38)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '30%'
    },
     
    text: {
        fontSize: 22
    },
})

export default SeletorPerfil;