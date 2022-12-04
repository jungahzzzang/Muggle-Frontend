import React from "react";
import { StyleSheet, View } from "react-native";
import { defaultFontText as Text } from "../../components/Text";

class SettingsScreen extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 24}}>자주묻는질문</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default SettingsScreen;