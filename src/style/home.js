import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create ({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#E1FFFF',
        overflow: 'hidden'
    },

    desenho: {
        borderWidth: 1,
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: 600,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80
    },


    perfil: {
        display: 'flex',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 60,
        width: 140,
        height: 180,
        justifyContent: 'center',
        alignSelf: 'center',
        top: '80%',
    },

    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 15,
        columnGap: 15,
        justifyContent: 'space-around',
        alignSelf: 'center',
        maxWidth: '90%',
        margin: 10,
        flex: 1,
    },

    novoPet: {
        width: 140,
        height: 172,
        borderRadius: 15,
        justifyContent: 'flex-end',
        borderWidth: .2
    },

    sombra: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#0000',
    },

    add: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        maxHeight: 95,
        maxWidth: 95,
    },

    textPetNovo: {
        textAlign: 'center',
        fontFamily: 'khula',
        fontWeight: 'bold',
        fontSize: 22,
        padding: 5,
        paddingBottom: 15
    },

    pet: {
        width: 140,
        height: 172,
        borderRadius: 25,
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 3.5, height: 3.5 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
    },

    text: {
        fontFamily: 'khula',
        fontWeight: 'bold',
        tex: 'center',
        fontSize: 30,
        paddingTop: 120,
        textAlign: 'center'
    },

    boxBottom: {
        padding: 3,
        rowGap: 5,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        borderRadius: 25,
    },

    textPet: {
        textAlign: 'center',
        fontFamily: 'khula',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 18,
        paddingBottom: 15,
    },

    bottom: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        color: 'white',
        pointerEvents: 'auto',
        backgroundColor: '#333030',
        padding: 15,
        textAlign: 'center'
    },

    scrollView: {
        marginBottom: 50
    }
});

export default HomeStyle;