import React, { useState } from 'react';
import {Text, View, ScrollView, Pressable, TextInput, Image, ImageBackground, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const Header = ({ nome, idade, modal, descricao }) => {

    return(
        <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.headContent}>
                    <View>
                        <View style={styles.fotoPerfil}>
                            <Image style={styles.img}/>
                        </View>
                    </View>
                    <View style={styles.caixaDescricao}>
                        <Text style={styles.titulo}>{nome}, {idade} anos</Text>
                        <Text style={styles.descricao} numberOfLines={2} ellipsizeMode='tail'>
                            {descricao}
                        </Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={modal}>
                            <Image source={require('../../../assets/icons/perfil/edit.png')} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.icons}>
                    <View style={styles.icon}>
                        <Image source={require('../../../assets/icons/perfil/add.png')} style={styles.img}/>
                    </View>
                    <View style={styles.icon}>
                        <Image source={require('../../../assets/icons/perfil/qrcode.png')} style={styles.img}/>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles =  StyleSheet.create({
    content: {
        marginVertical: 3
    },

    img: {
        width: '100%',
        height: '100%'
    },

    header: {
        backgroundColor: 'white',
    },

    headContent: {
        flexDirection: 'row',
        marginVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',

        padding: 25
    },
    
    fotoPerfil: {
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: .5
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
        marginHorizontal: 25,
        marginBottom: 5
    },

    icon: {
        height: 45,
        width: 45,
    },
    }
);

export default Header;