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

    logo: {
        maxHeight: '100%',
        height: 85,
        maxWidth: '100%',
        width: 85,
        alignSelf: 'center'
    },

    textTitulo: {
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
        alignSelf: "center"
    },

    textDesc: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 400,
        alignSelf: "center"
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
    },

    textBtn: {
        color: 'white',
        fontSize: "24px",
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    caixaTexto: {
        alignSelf: 'center',
        width: '95%',
        height: 40,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderBottomColor: '#3C3B3BCC',
        margin: 10,

        verticalAlign: 'Botton',
        placeholderTextColor: '#B4B2B2',
        fontFamily: 'Poppins',
        fontWeight: '400',
        paddingLeft: 10,
        fontSize: 24
    },

    contentLogin: {
        marginTop: '30%',
        borderRadius: 800
    },

    forget:{
        alignSelf: 'flex-end',
        margin: 10
    },

    forgetText:{
        fontFamily: 'Poppins',
        fontSize: 20,
        color: '#0FC2BF'
    },  

    contentCadastro: {

    },

    textTopo:{
        color: '#3C3A3A',
        fontFamily: 'Poppins',
        fontSize: 40,
        alignSelf: 'center'
    }
})

export default IndexStyle;