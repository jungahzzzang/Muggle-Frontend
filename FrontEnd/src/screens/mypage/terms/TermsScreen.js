import React from "react";
import { StyleSheet, View } from "react-native";
import { defaultFontText as Text } from "../../../components/Text";

class TermsScreen extends React.Component {
    
    render(){
        return(
            <View style={styles.container}>
                <NavigationHeader title={"서비스 이용약관"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
                <Text style={{fontSize: 24}}>서비스 이용약관</Text>
            </View>
        )   
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default TermsScreen;