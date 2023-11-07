import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';

const MenuOpcoes = ({ icone, titulo, conteudo }) => {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <View style={styles.content}>
            <Pressable style={styles.accordion} onPress={() => setMenuAberto(!menuAberto)}>
                {icone}
                <Text style={styles.titulo}>
                    {titulo}
                </Text>
            </Pressable>
            {menuAberto && <View style={styles.conteudo}>
                {conteudo}
            </View>}
        </View>
    )
};

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

export default MenuOpcoes;