import { StyleSheet } from "react-native";

const IndexStyle =  StyleSheet.create({
    container: {
        display: 'flex',
        fontFamily: 'Poppins',
        fontSize: '555px',
        position: 'absolute',
        alignSelf: 'center',
        bottom: '15px'
    },

    ImageBackground: {
        height: '100%',
    },

    textTitulo: {
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: "center"
    },

    textDesc: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 400,
        textAlign: "center"
    },

    button: {
        borderRadius: '5px',
        backgroundColor: '#0FC2BF', 
        alignSelf: 'center',
        justifyContent: 'center',
        minWidth: '280px',
        height: '50px',
        width:'50%',
        margin: '13px',

        shadowColor: '#000',
        shadowOffset: { width: 3.5, height: 3.5 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
    },

    textBtn: {
        color: 'white',
        fontSize: "24px",
        fontWeight: 'bold',
        textAlign: 'center',
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
})

export default IndexStyle;