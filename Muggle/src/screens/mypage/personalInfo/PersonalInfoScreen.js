import React from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../../components/shared/Text";
import NavigationHeader from "../../../components/shared/NavigationHeader";

const PersonalInfoScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <NavigationHeader title={"개인정보처리방침"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
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

export default PersonalInfoScreen;