import { StyleSheet } from "react-native";

const SenhaStyle =  StyleSheet.create({
    content:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },

    icone:{
        maxHeight: '100%',
        height: 125,
        maxWidth: '100%',
        width: 125,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 370      
    },

    img:{
        height: '100%',
        width: '100%'
    },

    conteudo:{
        width: '95%',
        height: 420,
        alignSelf: 'center',
        
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 25
    },

    titulo: {
        fontSize: 34,
        textAlign: 'center',
        paddingTop: 50
    },

    text:{
        fontSize: 20,
        padding: 15,
        textAlign: 'center'
    },
    
    botao:{
        alignSelf: 'center',
        margin: 15
    },

    bottomBack:{
        alignSelf: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        width: '100%',
        margin: 10
    },

    textBack:{
        textAlign: 'center',
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold',
    },

    bottomEnviar:{
        borderRadius: 5,
        backgroundColor: 'rgba(15, 194, 191, 0.75)',
        justifyContent: 'center',
        margin: 10,
        minWidth: 180,
        height: 50,
        margin: 10
    },

    textEnviar:{
        fontSize: 26,
        color:'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }

});

export default SenhaStyle;