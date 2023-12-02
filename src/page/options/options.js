// Importando os componentes necessários do React e React Native
import React, { useState, useEffect } from 'react';
import {Text, View, Image, Modal, TouchableOpacity, ScrollView} from 'react-native';
import OptionsStyle from '../../style/optionsStyle';
import MenuOpcoes from '../../component/opcoes/opcoes';
import { useNavigation } from '@react-navigation/native';

// Importando funções do Firebase para autenticação e armazenamento de dados
import { getAuth, signOut } from 'firebase/auth';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../services/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore/lite';

// Definindo o componente Config
const Config = ({ }) => {
    // Obtendo a função de navegação do React Navigation
    const navigation = useNavigation();

    // Obtendo o usuário atual do Firebase Auth
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user ? user.uid : null;

    // Definindo o estado inicial para o nome do usuário, email e imagem de perfil
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    // Definindo a referência para a imagem de perfil no Firebase Storage
    const refPerfil = uid ? ref(storage, `${uid}/fotoUser/foto-perfil.png`) : null;

    // Função para deslogar o usuário
    async function Logout () {
        try {
            await signOut(auth);
            console.log('Usuário deslogado com sucesso!');
            navigation.navigate('Index');
        } catch (error) {
            console.error(error);
        }
    }

    // Usando o hook useEffect para obter a URL da imagem de perfil quando o componente é montado
    useEffect(() => {
        if (uid) {
            getDownloadURL(refPerfil).then((url) => {
                setImage(url);
            });
        }
    }, [uid]);

    // Se o usuário estiver autenticado, obtenha o nome e o email do usuário do documento do usuário no Firestore
    if (user) {
        const docRef = doc(db, 'users', user.uid);
        getDoc(docRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                setName(data.name);
                setEmail(data.email);
            } else {
            }
        }).catch((error) => {
            console.log("Erro ao obter o documento:", error);
        });
    }

    // Definindo o estado inicial para o modal
    const [modal, setModal] = useState(false);


    return(
        <View style={OptionsStyle.wall}>
            {/* Renderizando o cabeçalho */}
            <View style={OptionsStyle.header}>
                {/* Renderizando a imagem de perfil */}
                <View style={OptionsStyle.perfil}>
                    <Image style={{width: '100%', height: '100%'}} source={{uri: image}}/>
                </View>
                {/* Renderizando o nome e o email do usuário */}
                <View style={OptionsStyle.cabecalho}>
                    <Text style={OptionsStyle.nome}>{name}</Text>
                    <Text style={OptionsStyle.email}>{email}</Text>
                </View>
            </View>
            {/* Renderizando o conteúdo */}
            <ScrollView style={OptionsStyle.content}>
                {/* Renderizando as opções de configurações gerais */}
                <MenuOpcoes 
                    titulo={'Configurações Gerais'}
                    conteudo={[
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Alterar nome</Text></TouchableOpacity>,
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Alterar senha</Text></TouchableOpacity>,
                    ]}
                />
                {/* Renderizando as opções de configurações de notificações */}
                <MenuOpcoes 
                    titulo={'Configurações de notificações'}
                    conteudo={[
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Toque</Text></TouchableOpacity>,
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Vibrar</Text></TouchableOpacity>,
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Silencioso</Text></TouchableOpacity>
                    ]}
                />
                {/* Renderizando as opções de segurança */}
                <MenuOpcoes 
                    titulo={'Segurança'}
                    conteudo={[
                        <TouchableOpacity style={OptionsStyle.botao} onPress={() => setModal(true)}><Text style={OptionsStyle.texto}>Sair</Text></TouchableOpacity>
                    ]}
                />
            </ScrollView>
    
            {/* Renderizando o modal */}
            <Modal
                animationType= 'fade'
                transparent={true}
                visible={modal}
            >
                {/* Quando pressionado, o modal é fechado */}
                <TouchableOpacity style={{width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.25)'}} onPress={() => setModal(false)}/>
                {/* Renderizando o conteúdo do modal */}
                <View style={OptionsStyle.popup}>
                    <Text style={OptionsStyle.textoPopup}>
                       Tem certeza que deseja sair?
                    </Text>
                    <View style={OptionsStyle.contentPopup}>
                        {/* Quando pressionado, o modal é fechado */}
                        <TouchableOpacity style={OptionsStyle.cancelarPopup} onPress={() => setModal(false)}>
                            <Text style={OptionsStyle.textoCancelar}>
                                Não
                            </Text>
                        </TouchableOpacity>
                        {/* Quando pressionado, a função Logout é chamada e o modal é fechado */}
                        <TouchableOpacity style={OptionsStyle.sairPopup} onPress={Logout} onPressOut={() => setModal(false)}>
                            <Text style={OptionsStyle.sairTexto}>
                                Sim
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )    
}

export default Config;