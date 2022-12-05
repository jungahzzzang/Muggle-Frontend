import React from "react";
import { StyleSheet, View } from "react-native";
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";

class BoardScreen extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <NavigationHeader title={"게시판"} navigation={this.props.navigation}/>
                <Text style={{fontSize: 24}}>게시판</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BoardScreen;