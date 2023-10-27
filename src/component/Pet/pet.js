import React, { useState } from 'react';
import {Text, View, ScrollView, Pressable, TextInput, Image, ImageBackground, StyleSheet, modal} from 'react-native';

//import Collection from '../../services/routes/Collection';
import { auth, provider } from "../../services/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import {collection,getDocs,addDoc,updateDoc,deleteDoc,doc,} from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const NovoPet = ({ pet }) => {
    const [visivel, setVisivel] = useState(false);

    const[nomePet, setNomePet] = useState('');

    const [newEmail, setEmail] = useState("");
    const [newNome, setNome] = useState("");
    const [newSenha, setSenha] = useState("");
    const [newCSenha, setCSenha] = useState("");


    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection (db,"users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { email: newEmail ,name: newNome, senha: String(newSenha), confirmsenha: String(newCSenha) });
  };

  const updateUser = async (id, senha) => {
    const userDoc = doc(db, "users", id);
    const newFields = { senha: senha==senha};
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [usersCollectionRef]);

        return (
            <View>
                <Pressable onPress={() => setVisivel(!visivel)} activeOpacity={1}>
                    <View style={[style.pet, style.sombra]}>
                    
                    </View>
                </Pressable>

                {visivel && (
                    <View style={style.petOn}>
                        <View style={style.boxBottom}>
                            <Text style={style.textPet}> {nomePet} </Text>
                            <Pressable style={style.bottom}>
                                <Text style={style.textbottom}>
                                    Perfil
                                </Text>
                            </Pressable>
                             <Pressable style={style.bottom}>
                                <Text style={style.textbottom}>
                                    Vacinas
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </View>
            )
};

const style = StyleSheet.create ({
    pet: {
        width: 140,
        height: 172,
        borderRadius: 10,
        borderWidth: .2
    },

    petOn: {
        position: 'absolute',
        width: 140,
        height: 172,
    },

    boxBottom: {
        display: 'flex',
        paddingVertical: 3,
        rowGap: 5,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        borderRadius: 17,
        alignContent: 'center',
        justifyContent: 'center'
    },

    textPet: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        height: '25%',
        width: '100%'
    },

    bottom: {
        backgroundColor: '#333030',
        width: '100%',
        height: '25%'
    },

    textbottom: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        width: '100%',
        height: '100%',
    },

    sombra: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#0000',
    },
});

export default NovoPet;