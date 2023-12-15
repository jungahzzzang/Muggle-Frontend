import React from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../../components/shared/Text";
import NavigationHeader from "../../../components/shared/NavigationHeader";

const ProfileScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"마이페이지"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
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
        backgroundColor: '#fff'
    }
});

export default ProfileScreen;