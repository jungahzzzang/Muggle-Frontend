import React from "react";
import { Modal } from "native-base";
import { StyleSheet } from "react-native";

const ModalContent = ({ openModal, closeModal, children }) => { 
    
    return (
        <Modal isOpen={openModal} onClose={closeModal}>
            <Modal.Content style={styles.modalContainer}>{children}</Modal.Content>
        </Modal>
    )
}

export default ModalContent;

const styles = StyleSheet.create({

    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 25,
    }
});