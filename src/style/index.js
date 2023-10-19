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
        maxHeight: '100%',
        height: 85,
        maxWidth: '100%',
        width: 85,
        alignSelf: 'center'
    },

    textTitulo: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        alignSelf: "center",
        marginVertical: 5,
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
        backgroundColor: '#0FC2BF',
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
        reight: 'bold'
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
        width: '100%',
        height: '80%'
    }
})

export default IndexStyle;