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
        fontFamily: 'Poppins',
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

        textAlignVertical: 'Botton',
        placeholderTextColor: '#B4B2B2',
        fontFamily: 'Poppins',
        fontWeight: '400',
        paddingLeft: 10,
        fontSize: 24
    },

    seleRaca: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflow: 'auto',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '95%',
        flex: 1
    },

    img: {
        display: 'grid',
        minHeight: 75,
        minWidth: 75,
        maxHeight: '100%',
        maxWidth: '100%',
        margin: 15
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
        justifyContent: 'flex-start',
        placeholderTextColor: '#B4B2B2',
        fontFamily: 'Poppins',
        fontWeight: '400',
        padding: 10,
        fontSize: 11,
    },

    Salvar:{
        width: '130px',
        height: '37px',
        borderRadius: '15px',
        backgroundColor: 'rgba(15, 194, 191, 0.2)',
        alignSelf: 'flex-end',
        margin: 15,
        justifyContent: 'center',
    },

    TextSalvar:{
        color: 'black',
        textAlign: 'center',
        fontSize: '20px'
    },

    Texto: {
        alignSelf: 'center',
        fontFamily: 'Poppins',
        fontSize: '16px',
        width: '85%',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#008F8D'
    }
});

export default CadastroStyle;