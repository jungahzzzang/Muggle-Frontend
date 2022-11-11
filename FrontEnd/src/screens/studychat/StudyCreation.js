import React from "react";
import { StyleSheet, Text, Button, ScrollView, SafeAreaView, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

const style = StyleSheet.create({
    button: {
        backgroundColor: "#fc454e",
        width: 66, 
        height: 66,
        borderRadius: 33,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20
    },
    buttonText: {
        color: "white",
        fontSize: 45,
        marginBottom: 6
    }
})

const StudyCreation = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text styled={{fontSize: 24}}>스터디 생성</Text> 
                    <Text styled={{fontSize: 24}}>카테고리</Text> 
                    <Text styled={{fontSize: 24}}>나이</Text>
                    <Text styled={{fontSize: 24}}>인원</Text> 
                 </View>
            </ScrollView>
        </SafeAreaView>
    );
};



export default StudyCreation;