import React, { useState } from 'react';
import {Text, View, Image, StyleSheet, Dimensions, } from 'react-native';

const {width, height} = Dimensions.get('window');

const Post = ({ pet, tutor, imagem }) => {
    const [nomePet, setNomePet] = useState ('Arrombado');

    return(
        <View style={styles.post}>
                <View style={styles.menuTitulo}>
                    <View style={styles.imageGr}>
                        <Image source={pet} style={styles.img}/>
                        <View style={styles.imagePq}>
                            <Image souce={tutor} style={styles.img} />
                        </View>
                    </View>
                    <View style={styles.viewTitulo}>
                        <Text style={styles.titulo}>
                            {pet}
                        </Text>
                    </View>
                </View>
                <View style={styles.fotoPost}>
                    <Image source={imagem} style={styles.img} />
                </View>
            </View>
    );
};

const styles = StyleSheet.create ({
    post: {
        alignSelf: 'center',
        backgroundColor: 'white',
        marginVertical: 5,
        
        width: '100%',
        maxWidth: 500
    },

    menuTitulo: {
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        padding: 15,

        alignItems: 'center',
    },
    
    img: {
        width: '100%',
        height: '100%'
    },

    imageGr: {
        width: 65,
        height: 65,
        borderRadius: 100,
        borderWidth: 1,
    },

    imagePq: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: 'white',

        bottom: -10,
        right: -10
    },

    viewTitulo: {
        paddingHorizontal: 15,
    },

    titulo: {
        fontSize: 20
    },

    fotoPost: {
        alignSelf: 'center',
        width: '90%',
        maxWidth: 450,
        height: height*.65,
        borderRadius: 7.5,
        marginBottom: 85,
    },
})

export default Post;