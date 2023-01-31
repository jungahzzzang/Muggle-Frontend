import React from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../components/Text";
import SearchBar from "../../components/SearchBar";
import NavigationHeader from "../../components/NavigationHeader";

const TheaterSearchScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"극장 검색"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <SearchBar placeholder={"찾으시는 극장명을 입력해 주세요."}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default TheaterSearchScreen;