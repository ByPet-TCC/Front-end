import { StyleSheet } from "react-native";

const PerfilStyle = StyleSheet.create ({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    content: {
        height: '30%',
        width: '80%',
        backgroundColor: 'white',
        alignSelf: 'center',
        verticalAlign: 'middle',
        borderRadius: 15,
        justifyContent: 'center'
    },
    
    descr: {
        display: 'flex',
        alignSelf: 'center',
        width: '80%',
        height: '80%',
        backgroundColor: '#D9D9D9CC',
        borderWidth: 1.5,
        borderColor: '#514F50',

        textAlign: 'auto',
        textAlignVertical: 'top',
        justifyContent: 'flex-start',
        padding: 10,
        fontSize: 16,
    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 15
    },
})

export default PerfilStyle;