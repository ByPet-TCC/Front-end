// Importando os módulos necessários do React Native
import React from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';

// Componente TextFormulario
const TextFormulario = ({ valor, onChangeText, espaço, texto, tipo }) => {
    return (
        // View que contém o Text e o TextInput
        <View>
            {/* Texto da pergunta */}
            <Text style={styles.TextoPerg}>
              {texto}
            </Text>
            {/* TextInput é um campo de entrada de texto que permite ao usuário inserir texto */}
            <TextInput style={styles.caixaTexto}
                placeholder={espaço} // Texto a ser exibido quando não há nenhum texto no campo de entrada
                value={valor} // O valor atual do campo de texto
                onChangeText={onChangeText} // Função a ser chamada quando o texto muda
                placeholderTextColor= {'#B4B2B2'} // A cor do texto do marcador de posição
                keyboardType={tipo} // O tipo de teclado a ser exibido
            >
            </TextInput>
        </View>
    )
};

// Definindo os estilos do componente
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

// Exportando o componente TextFormulario
export default TextFormulario;
