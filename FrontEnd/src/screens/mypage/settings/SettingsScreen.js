import React from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../../components/Text";
import NavigationHeader from "../../../components/NavigationHeader";

const SettingsScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"앱 설정"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <View>
                <Text>앱 설정</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
export default SettingsScreen;