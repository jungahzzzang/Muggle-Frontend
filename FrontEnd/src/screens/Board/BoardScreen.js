import React from "react";
import { StyleSheet, View } from "react-native";
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";

//export default BoardScreen = () =>{ 
export default class BoardScreen extends React.Component {

    render(){
        return(
            //<ScrollView>
                <View style={styles.container}>
                    <Text style={{fontSize: 24}}>게시판</Text>
                </View>
            //</ScrollView>   
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

//export default BoardScreen;