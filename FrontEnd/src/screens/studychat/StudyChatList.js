import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import {FontAwesome, Ionicons} from '@expo/vector-icons'; 

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textStyle:{
        fontSize: 16,
    },
    buttonContainer: {
        bottom: 50,
        right: 50
    },
    buttonText: {
        color: "white",
        fontSize: 45,
        marginBottom: 6
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        //backgroundColor: "transparent"
    },
})

const StudyChatList = ({navigation}) => {
    return(
        // <SafeAreaView>
            <View style={styles.container}>
            <Text style={styles.textStyle} >스터디 목록</Text>
            <ActionButton buttonColor="#1D5349" buttonTextStyle={styles.buttonText}>
                <ActionButton.Item
                    buttonColor="#1D5349"
                    title="스터디모집"
                    onPress={() => navigation.navigate('StudyCreation')}
                >
                    <FontAwesome name="pencil-square-o" size={24} color="#F5B4A7" />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#1D5349"
                    title="채팅"
                    onPress={() => navigation.navigate('Chat')}
                >
                    <Ionicons name="chatbox-ellipses" size={24} color="#F5B4A7" />
                </ActionButton.Item>
            </ActionButton>
            </View>
        // </SafeAreaView>
    );
};

export default StudyChatList;