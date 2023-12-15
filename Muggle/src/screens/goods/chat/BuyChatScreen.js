import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { defaultFontText as Text } from "../../../components/shared/Text";

const BuyChatScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>구매 채팅방</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default BuyChatScreen;