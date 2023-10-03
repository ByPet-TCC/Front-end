import React from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';

const TextFormulario = ({ valor, onChangeText, espaço, texto }) => {
    return (
        <View>
            <Text style={styles.TextoPerg}>
              {texto}
            </Text>
            <TextInput style={styles.caixaTexto}
                placeholder={espaço}
                value={valor}
                onChangeText={onChangeText}
            >
            </TextInput>
        </View>
    )
};

const styles = StyleSheet.create({
    TextoPerg: {
        fontFamily: 'Poppins',
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

        textAlignVertical: 'Botton',
        placeholderTextColor: '#B4B2B2',
        fontFamily: 'Poppins',
        fontWeight: '400',
        paddingLeft: 10,
        fontSize: 24
    },
});

export default TextFormulario;