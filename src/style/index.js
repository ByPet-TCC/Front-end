import { StyleSheet } from "react-native";

const IndexStyle =  StyleSheet.create({
    container: {
        display: 'flex',
        fontFamily: 'Poppins',
    },

    ImageBackground: {
        height: '100%'
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
        margin: '13px'
    },

    textBtn: {
        color: 'white',
        fontSize: "24px",
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default IndexStyle;