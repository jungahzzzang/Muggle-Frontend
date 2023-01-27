import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavigationHeader from "../../components/NavigationHeader";

const BoardScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <NavigationHeader title={"뮤글 거래소"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
                <Text>게시판게시판</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default BoardScreen;