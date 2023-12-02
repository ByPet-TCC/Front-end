// Importando os módulos necessários do React Native
import React, { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Componente SeletorPerfil
const SeletorPerfil = ({ setUriImagem }) => {
  // Definindo o estado inicial da imagem
  const [image, setImage] = useState(null);

  // Função para lidar com a seleção da imagem
  const handlePress = (image) => {
    setImage(image);
    setUriImagem(image);
  };

  // Função para abrir a biblioteca de imagens e permitir que o usuário selecione uma foto
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

  // Retornando o componente SeletorPerfil
  return (
    <View style={style.content}>
        <Text style={style.title}>Foto de Perfil</Text>
        {/* Exibindo a imagem selecionada ou a imagem padrão se nenhuma imagem foi selecionada */}
        {image === null ? <Image source={require('../../../assets/icons/addPicture/addPicture.png')} style={style.perfil} /> :  <View>{image && <Image source={{ uri: image }} style={style.perfil} /> }</View>}
        {/* Botão para abrir a biblioteca de imagens */}
        <TouchableOpacity style={style.bottom} onPress={takePhoto}>
        <Text style={style.text}>
            Carregar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Definindo os estilos do componente
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

// Exportando o componente SeletorPerfil
export default SeletorPerfil;
