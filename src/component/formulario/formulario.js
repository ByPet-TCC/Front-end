import React from 'react';
import {Text, View, Pressable, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';

const Formulario = ({ valor, onChangeText, espaço }) => {
    return (
        <View>
            <TextInput style={styles.caixaTexto}
                placeholder={espaço}
                value={valor}
                onChangeText={onChangeText}
                secureTextEntry={true}
                placeholderTextColor= {'#B4B2B2'}
            >
            </TextInput>
        </View>
    )
};

const styles = StyleSheet.create({
    caixaTexto: {
        alignSelf: 'center',
        width: '95%',
        height: 40,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderBottomColor: '#3C3B3BCC',
        margin: 10,

        textAlign: 'Botton',
        fontFamily: 'Poppins',
        fontWeight: '400',
        paddingLeft: 10,
        fontSize: 24
    },
});

export default Formulario;