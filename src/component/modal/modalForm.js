import React from 'react';
import { Modal, TouchableHighlight, View } from 'react-native';

const CustomModal = ({ children, visible, setVisible }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={() => setVisible(false)}
  >
    <View style={{marginTop: 50, backgroundColor: 'white'}}>
      {children}

      <TouchableHighlight onPress={() => setVisible(false)}>
        <Text>Fechar</Text>
      </TouchableHighlight>
    </View>
  </Modal>
);

export default CustomModal;