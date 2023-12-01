import { StyleSheet } from "react-native";

const IndexStyle =  StyleSheet.create({
    container: {
        position: 'absolute',
        display: 'flex',
        alignSelf: 'center',
        bottom: 25
    },

    ImageBackground: {
        height: '100%',
        width: '100%'
    },

    logo: {
        position: 'absolute',
        top: -53,

        maxHeight: '100%',
        height: 105,
        maxWidth: '100%',
        width: 105,
        alignSelf: 'center'
    },

    textTitulo: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        alignSelf: "center",
        marginVertical: 10,
    },

    textDesc: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        alignSelf: "center",
        marginVertical: 5
    },

    button: {
        borderRadius: 5,
        backgroundColor: 'rgba(15, 194, 191, 0.75)',
        justifyContent: 'center',
        margin: 10,
        minWidth: 260,
        height: 50,
    },

    textBtn: {
        textAlign: 'center',
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    },


    caixaTexto: {
        alignSelf: 'center',
        width: '95%',
        height: 40,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderBottomColor: '#3C3B3BCC',
        margin: 10,

        placeholderTextColor: '#B4B2B2',
        paddingLeft: 10,
        fontSize: 24
    },

    contentLogin: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 35,
    },

    forget:{
        alignSelf: 'flex-end',
        margin: 10
    },

    forgetText:{
        fontSize: 20,
        color: '#0FC2BF'
    },  

    textTopo:{
        color: '#3C3A3A',
        fontSize: 40,
        alignSelf: 'center',
    },

    textIcon:{
        fontSize: 28,
        textAlign: 'center',
        color: '#3C3A3A',
        padding: 20,
    },

    logos: {
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        },

    logoEx: {
        maxHeight: '100%',
        height: 70,
        maxWidth: '100%',
        width: 70,
        
    },
    
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '80%'
    },

    bVisivel: {
        alignSelf: 'flex-end',
        margin: 10,
    },

    visiv: {
        fontSize: 18,
        color: '#0FC2BF'
    }
})

export default IndexStyle;
