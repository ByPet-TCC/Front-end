import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const NovaVacina = ({  }) => {
    const [nomeVacina, setNomePet] = useState('');
    const [dataDose, setDataDose] = useState('');
    const [dataAplicacao, setDataAplicacao] = useState('');

    return (
        <View style={styles.content}>
            <View>
                <View>
                    <Image />
                    <Text style={styles.titulo}>
                        {nomeVacina}nome da Vacina
                    </Text>
                </View>
                <View style={styles.conteudo}>
                    <View style={styles.dados}>
                        <Text style={styles.texto}>
                            Dose
                        </Text>
                        <Text style={styles.texto}>
                            {dataDose}12/12
                        </Text>
                    </View>
                    <View style={styles.dados}>
                        <Text style={styles.texto}>
                            Aplicação
                        </Text>
                        <Text style={styles.texto}>
                            {dataAplicacao}12/12
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.espaçoIcone}>
                <View style={styles.icone}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    content: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,

        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    titulo: {
        fontSize: 32,
        paddingTop: 15,
        paddingLeft: 15
    },

    conteudo: {
        flexDirection: 'row',
        padding: 5,
    },

    dados: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },

    texto: {
        fontSize: 18
    },

    espaçoIcone:{
        justifyContent: 'center',
    },

    icone: {
        width: 65,
        height: 65,
        borderWidth: 2,
        borderRadius: 100,
        marginHorizontal: 5
    },
    }
);

export default NovaVacina;