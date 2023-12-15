import React from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { defaultFontText as Text } from "../../../components/shared/Text";
import NavigationHeader from "../../../components/shared/NavigationHeader";

const FAQScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"자주묻는질문"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <View>
                <Text>FAQ</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default FAQScreen;