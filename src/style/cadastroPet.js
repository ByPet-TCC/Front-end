import { StyleSheet } from "react-native";

const CadastroStyle = StyleSheet.create ({
    content:{
        backgroundColor: '#E3E3E3',
        maxHeight: '100%',
        width: '100%'
    },

    CaixaBranca:{
        backgroundColor: 'white',
        marginBottom: 10,
        paddingVertical: 15
    },

    TextoPerg: {
        color: '#008F8D',
        fontSize: 22,
        paddingLeft: '3%',
        paddingVertical: 5,
        marginTop: 15
    },

    caixaTexto: {
        alignSelf: 'center',
        width: '95%',
        height: 40,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderBottomColor: '#3C3B3BCC',

        textAlign: 'Botton',
        paddingLeft: 10,
        fontSize: 24
    },

    CaixaDesc:{
        display: 'flex',
        alignSelf: 'center',
        width: '80%',
        height: 180,
        backgroundColor: '#D9D9D9CC',
        borderWidth: 1.5,
        borderColor: '#514F50',

        textAlign: 'auto',
        textAlignVertical: 'top',
        justifyContent: 'flex-start',
        padding: 10,
        fontSize: 11,
    },

    Salvar:{
        width: 130,
        height: 37,
        borderRadius: 15,
        backgroundColor: 'rgba(15, 194, 191, 0.2)',
        alignSelf: 'flex-end',
        margin: 15,
        justifyContent: 'center',
    },

    TextSalvar:{
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },

    Texto: {
        alignSelf: 'center',
        fontSize: 16,
        width: '85%',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#008F8D'
    }
});

export default CadastroStyle;