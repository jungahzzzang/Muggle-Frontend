import React from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../../components/Text";
import NavigationHeader from "../../../components/NavigationHeader";

const ProfileScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"계정관리"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                              rightIcon rightIconName={"settings-outline"} onPressRight={()=>navigation.navigate('MyPage')}
            />
            <View>
                <Text>계정관리</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ProfileScreen;