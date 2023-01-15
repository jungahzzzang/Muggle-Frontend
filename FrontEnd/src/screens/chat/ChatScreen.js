import React from "react";
import { StyleSheet, View } from "react-native";
import {useNavigation} from "@react-navigation/core";
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";

const navigation = useNavigation();

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <NavigationHeader title={"뮤글 거래소"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <Text style={{fontSize: 15}}>게시판</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ChatScreen;