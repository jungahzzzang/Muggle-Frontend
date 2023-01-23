import React from "react";
import { StyleSheet, View } from "react-native";
import {useNavigation} from "@react-navigation/core";
import { defaultFontText as Text } from "../../../components/Text";
import NavigationHeader from "../../../components/NavigationHeader";

const navigation = useNavigation();

const ProfileScreen = () => {
    return(
        <View style={styles.container}>
            <NavigationHeader title={"프로필"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <Text style={{fontSize: 24}}>프로필</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ProfileScreen;