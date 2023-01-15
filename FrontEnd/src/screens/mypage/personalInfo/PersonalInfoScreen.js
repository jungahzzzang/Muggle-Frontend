import React from "react";
import { StyleSheet, View } from "react-native";
import { defaultFontText as Text } from "../../../components/Text";
import NavigationHeader from "../../../components/NavigationHeader";

const PersonalInfoScreen = () => {
    return (
        <View style={styles.container}>
            <NavigationHeader title={"개인정보처리방침"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <Text style={{fontSize: 24}}>개인정보처리방침</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default PersonalInfoScreen;