import React from "react";
import { StyleSheet, View } from "react-native";
import {useNavigation} from "@react-navigation/core";
import { defaultFontText as Text } from "../../../components/Text";
import NavigationHeader from "../../../components/NavigationHeader";

const navigation = useNavigation();

const FAQScreen = () => {
    return(
        <View style={styles.container}>
            <NavigationHeader title={"자주 묻는 질문"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <Text style={{fontSize: 24}}>자주 묻는 질문</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default FAQScreen;