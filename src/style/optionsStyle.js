import { StyleSheet } from "react-native";

const OptionsStyle =  StyleSheet.create({
        wall: {
            backgroundColor: 'rgba(255, 255, 255, .9)',
        },
        header: {
            alignSelf: 'center',
            paddingVertical: 20,
            flexDirection: 'row',
            width: '100%',
            padding: 15,

            borderColor: 'gray',
            borderRadius: 1,
            borderBottomWidth: 1,
        },

        cabecalho:{
            marginHorizontal: 10,
            marginTop: 15,
            paddingTop: 10,
            justifyContent: 'space-evenly'
        },

        perfil: {
            height: 85,
            width: 65,
            borderWidth: .75,
            borderColor: 'black',
            borderRadius: 150
        },
        
        nome: {
            fontSize: 24
        },

        email:{
            fontSize: 18
        },

        content: {
            width: '100%',
            height: '100%',
            padding: 5,
            backgroundColor: 'rgba(240, 240, 240, 1)',
        },
        
        botao: {
            borderColor: 'gray',
            borderRadius: 50,
            borderBottomWidth: 1,
        },

        texto: {
            fontSize: 18,
            height: 45,
            marginHorizontal: 20,
            textAlignVertical: 'center',
        },

        tema: {
            display: 'flex',
            flexDirection: 'row'
        },

        popup: {
            position: 'absolute',
            backgroundColor: 'white',
            width: '80%',
            height: 250,
            alignSelf: 'center',
            top: '35%',
            borderRadius: 15,
            justifyContent: 'space-around'
        },

        contentPopup: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            
        },

        textoPopup: {
            textAlign: 'center',
            fontSize: 28,
            margin: 25
        },

        cancelarPopup: {
            paddingVertical: 10,
            paddingHorizontal: 65
        },

        textoCancelar: {
            fontSize: 22
        },

        sairPopup: {
            paddingVertical: 10,
            paddingHorizontal: 65
        },

        sairTexto: {
            fontSize: 22
        },
    }
);

export default OptionsStyle;