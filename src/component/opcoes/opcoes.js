// Importando os módulos necessários do React Native
import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

// Componente MenuOpcoes
const MenuOpcoes = ({ icone, titulo, conteudo }) => {
    // Definindo o estado inicial do menu
    const [menuAberto, setMenuAberto] = useState(false);

    // Retornando o componente MenuOpcoes
    return (
        <View style={styles.content}>
            {/* Botão para abrir/fechar o menu */}
            <Pressable style={styles.accordion} onPress={() => setMenuAberto(!menuAberto)}>
                {icone}
                <Text style={styles.titulo}>
                    {titulo}
                </Text>
            </Pressable>
            {/* Conteúdo do menu, que é exibido apenas quando o menu está aberto */}
            {menuAberto && <View style={styles.conteudo}>
                {conteudo}
            </View>}
        </View>
    )
};

// Definindo os estilos do componente
const styles = StyleSheet.create({
    content: {
        width: '95%',
        alignSelf: 'center',
        marginVertical: 1,        
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },

    accordion: {
        height: 50,
        borderRadius: 5,
        backgroundColor: 'rgba(15, 194, 194, 0.5)',
        justifyContent: 'center',
        
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    
    titulo: {
        fontSize: 24,
        paddingHorizontal: 15
    },
    
    conteudo: {
        width:'98%',
        alignSelf: 'center',
        backgroundColor: 'rgba(15, 194, 194, 0.35)',
        justifyContent: 'center',
    },
})

// Exportando o componente MenuOpcoes
export default MenuOpcoes;