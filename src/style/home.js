import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create ({
    content: {
        fontFamily: 'Poppins',
    },

    desenho: {
        backgroundColor: 'black',
        display: 'flex',
        minWidth: '390px',
        with: '100%',
        height: 380,
    },

    perfil: {
        display: 'flex',
        backgroundColor: 'white',
        border: 1,
        borderRadius: '60px',
        width: '140px',
        height: '180px',
    },
});

export default HomeStyle;