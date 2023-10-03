import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create ({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#E1FFFF',
        overflow: 'hidden'
    },

    desenho: {
        backgroundColor: 'black',
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: 380,
        borderBottomRightRadius: '80px',
        borderBottomLeftRadius: '80px'
    },


    perfil: {
        display: 'flex',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: '60px',
        width: '140px',
        height: '180px',
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
        flex: 1
    },

    novoPet: {
        width: 175,
        height: 215,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 3.5, height: 3.5 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        justifyContent: 'flex-end',
        flexBasis: '100'
    },

    add: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        maxHeight: '95px',
        maxWidth: '95px',
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
        width: 175,
        height: 215,
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
        textAlign: 'center',
        fontSize: '30px',
        paddingTop: '120px'
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
});

export default HomeStyle;