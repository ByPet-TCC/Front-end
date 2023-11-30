import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Alert, Pressable } from 'react-native';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const options = ['Deletar'];

  const deletePost = () => {
    // Adicione aqui a lógica para deletar o post
    console.log('Post deletado');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.dropdownText}>Interagir</Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownMenu}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownOption}
              onPress={() => {
                setIsOpen(false);
                setModalVisible(true);
              }}
            >
              <Text style={styles.dropdownOptionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Tem certeza de que deseja deletar?</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Não</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                deletePost();
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Sim</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  dropdownText: {
    fontSize: 18,
    color: '#000',
  },
  dropdownMenu: {
    marginTop: 10,
  },
  dropdownOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#000',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
