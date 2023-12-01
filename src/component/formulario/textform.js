import React from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';

const TextFormulario = ({ valor, onChangeText, espaço, texto, tipo }) => {
    return (
        <View>
            <Text style={styles.TextoPerg}>
              {texto}
            </Text>
            <TextInput style={styles.caixaTexto}
                placeholder={espaço}
                value={valor}
                onChangeText={onChangeText}
                placeholderTextColor= {'#B4B2B2'}
                keyboardType={tipo}
            >
            </TextInput>
        </View>
    )
};

const styles = StyleSheet.create({
    TextoPerg: {
        color: '#008F8D',
        fontSize: 22,
        paddingLeft: '3%',
        marginTop: 5
    },
    
    caixaTexto: {
        alignSelf: 'center',
        width: '95%',
        height: 40,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderBottomColor: '#3C3B3BCC',
        margin: 10,

        fontWeight: '400',
        paddingLeft: 10,
        fontSize: 24
    },
});

export default TextFormulario;