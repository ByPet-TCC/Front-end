// Importando os módulos necessários do React Native
import React, { useState } from 'react';
import {Text, View, ScrollView, Pressable, TextInput, Image, ImageBackground, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

// Componente Header
const Header = ({ nome, idade, modal, descricao, imagem, addImagem, qrcode }) => {
    // Retornando o componente Header
    return(
        <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.headContent}>
                    <View>
                        <View style={styles.fotoPerfil}>
                            {/* Exibindo a imagem do perfil */}
                            <Image source={{ uri: imagem }} style={styles.img}/>
                        </View>
                    </View>
                    <View style={styles.caixaDescricao}>
                        {/* Exibindo o nome e a idade */}
                        <Text style={styles.titulo}>{nome}, {idade}</Text>
                        {/* Exibindo a descrição */}
                        <Text style={styles.descricao} numberOfLines={2} ellipsizeMode='tail'>
                            {descricao}
                        </Text>
                    </View>
                    <View style={styles.icon}>
                        {/* Botão para abrir o modal de edição */}
                        <TouchableOpacity onPress={modal}>
                            <Image source={require('../../../assets/icons/perfil/edit.png')} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.icons}>
                    {/* Botão para adicionar imagem */}
                    <TouchableOpacity style={styles.icon} onPress={addImagem}>
                        <Image source={require('../../../assets/icons/perfil/add.png')} style={styles.img}/>
                    </TouchableOpacity>
                    {/* Botão para exibir o QR Code */}
                    <TouchableOpacity style={styles.icon} onPress={qrcode}>
                        <Image source={require('../../../assets/icons/perfil/qrcode.png')} style={styles.img}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

// Definindo os estilos do componente
const styles =  StyleSheet.create({
    content: {
        marginVertical: 5,
    },

    img: {
        width: '100%',
        height: '100%',
    },

    header: {
        backgroundColor: 'white',
    },

    headContent: {
        flexDirection: 'row',
        marginVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',

        padding: 20
    },
    
    fotoPerfil: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: '#015A58'
    },

    caixaDescricao:{
        marginHorizontal: 15,
        width: '50%',
        overflow: 'hidden',
    },

    titulo: {
        fontSize: 22,
        fontWeight: 'bold'
    },

    descricao: {
        fontSize: 18,
    },

    icons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: -45,
        paddingBottom: 15,
        paddingEnd: 15
    },

    icon: {
        height: 45,
        width: 45,
    },
    }
);

// Exportando o componente Header
export default Header;
