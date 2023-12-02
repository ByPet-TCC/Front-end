// Importando os módulos necessários do React Native
import React from 'react';
import {Text, View, Pressable, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';

// Componente Formulario
const Formulario = ({ valor, onChangeText, espaço, senha, tipo }) => {
    return (
        // View que contém o TextInput
        <View> 
            {/* TextInput é um campo de entrada de texto que permite ao usuário inserir texto */}
            <TextInput style={styles.caixaTexto}
                placeholder={espaço} // Texto a ser exibido quando não há nenhum texto no campo de entrada
                value={valor} // O valor atual do campo de texto
                keyboardType= {tipo} // O tipo de teclado a ser exibido
                onChangeText={onChangeText} // Função a ser chamada quando o texto muda
                secureTextEntry={senha} // Se verdadeiro, o texto é substituído por pontos, útil para campos de senha
                placeholderTextColor= {'#B4B2B2'} // A cor do texto do marcador de posição
            >
            </TextInput>
        </View>
    )
};

// Definindo os estilos do componente
const styles = StyleSheet.create({
    caixaTexto: {
        alignSelf: 'center',
        width: '95%',
        height: 40,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderBottomColor: '#3C3B3BCC',
        margin: 10,

        paddingLeft: 10,
        fontSize: 24
    },
});

// Exportando o componente Formulario
export default Formulario;
