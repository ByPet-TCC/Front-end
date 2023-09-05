import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create ({
    container: {
        flexGrow: 1,
        backgroundColor: '#E1FFFF'
    },

    desenho: {
        backgroundColor: 'black',
        display: 'flex',
        position: 'relative',
        with: '100%',
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
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 15,
        columnGap: 15,
        justifyContent: 'space-around',
        alignSelf: 'center',
        maxWidth: '85%',
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
        backgroundColor: "blue",
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

    paw: {
        display: 'flex',
        backgroundColor: '#0FC2BF',
        borderColor: '#015A58',
        borderWidth: 3,
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        borderBottomLeftRadius: '40%',
        borderBottomRightRadius: '40%',

        width: '100px',
        height: '75px',
        position: 'absolute',
        bottom: 55,
        right: 35,
        transform: [{rotate: '-45deg'}]
    },
    
});

export default HomeStyle;