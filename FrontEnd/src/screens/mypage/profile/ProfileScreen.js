import React from "react";
import { StyleSheet, View } from "react-native";
import { defaultFontText as Text } from "../../../components/Text";
import NavigationHeader from "../../../components/NavigationHeader";

class ProfileScreen extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <NavigationHeader title={"프로필"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
                <Text style={{fontSize: 24}}>프로필</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ProfileScreen;