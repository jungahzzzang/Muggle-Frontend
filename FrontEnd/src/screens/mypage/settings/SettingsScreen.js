import React from "react";
import { StyleSheet, View } from "react-native";
import { defaultFontText as Text } from "../../../components/Text";
import NavigationHeader from "../../../components/NavigationHeader";

const SettingsScreen = () => {
    return(
        <View style={styles.container}>
             <NavigationHeader title={"앱 설정"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <Text style={{fontSize: 24}}>앱 설정</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default SettingsScreen;