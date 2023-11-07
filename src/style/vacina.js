import { StyleSheet } from "react-native";

const VacinaStyle =  StyleSheet.create({
    ImageBackground: {
        height: '100%',
        width: '100%'
    },
    
    content: {
        width: '100%',
        height: '100%'
    },

    header: {
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: 5,
        marginVertical: 20,

        maxWidth: '80%',
    },

    text: {
        textAlign: 'center',
        fontSize: 38,
        fontWeight: 'bold'
    },

    menu: {
        backgroundColor: 'rgba(255, 255, 255, .5)',
        width: '90%',
        maxHeight: '70%',
        alignSelf: 'center',
        borderRadius: 15,
        paddingVertical: 10,

        overflow: 'hidden'
    },

    pBotton: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },

    botton: {
        height: 95,
        width: 95,
        borderRadius: 100,
    },

    }
);

export default VacinaStyle;