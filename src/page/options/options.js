import React, { useState } from 'react';
import {Text, View, Image, Modal, TouchableOpacity, ScrollView} from 'react-native';
import OptionsStyle from '../../style/optionsStyle';
import MenuOpcoes from '../../component/opcoes/opcoes';
import { useNavigation } from '@react-navigation/native';

import { getAuth, signOut } from 'firebase/auth';

const Config = ({ }) => {
    const navigation = useNavigation();
    const auth = getAuth();
    const user = auth.currentUser

    async function Logout () {
        try {
            await signOut(auth);
            console.log('Usuário deslogado com sucesso!');
            navigation.navigate('Index')
          } catch (error) {
            console.error(error);
          }
    }

    const [modal, setModal] = useState(false);

    return(
        <View style={OptionsStyle.wall}>
            <View style={OptionsStyle.header}>
                <Image style={OptionsStyle.perfil}/>
                <View style={OptionsStyle.cabecalho}>
                    <Text style={OptionsStyle.nome}>{user.displayName}</Text>
                    <Text style={OptionsStyle.email}>{user.email}</Text>
                </View>
            </View>
            <ScrollView style={OptionsStyle.content}>
                <MenuOpcoes 
                    titulo={'Configurações Gerais'}
                    conteudo={[
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Alterar nome</Text></TouchableOpacity>,
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Alterar senha</Text></TouchableOpacity>,
                    ]}
                />
                <MenuOpcoes 
                    titulo={'Configurações de notificações'}
                    conteudo={[
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Toque</Text></TouchableOpacity>,
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Vibrar</Text></TouchableOpacity>,
                        <TouchableOpacity style={OptionsStyle.botao}><Text style={OptionsStyle.texto}>Silencioso</Text></TouchableOpacity>
                    ]}
                />
                    <MenuOpcoes 
                        titulo={'Segurança'}
                        conteudo={[
                            <TouchableOpacity style={OptionsStyle.botao} onPress={() => setModal(true)}><Text style={OptionsStyle.texto}>Sair</Text></TouchableOpacity>
                        ]}
                    />
            </ScrollView>

            <Modal
                animationType= 'fade'
                transparent={true}
                visible={modal}
            >
                <TouchableOpacity style={{width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.25)'}} onPress={() => setModal(false)}/>
                <View style={OptionsStyle.popup}>
                    <Text style={OptionsStyle.textoPopup}>
                       Tem certeza que deseja sair?
                    </Text>
                    <View style={OptionsStyle.contentPopup}>
                        <TouchableOpacity style={OptionsStyle.cancelarPopup} onPress={() => setModal(false)}>
                            <Text style={OptionsStyle.textoCancelar}>
                                Não
                            </Text>
                        </TouchableOpacity>
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