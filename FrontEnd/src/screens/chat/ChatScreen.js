import React from "react";
import { StyleSheet, View } from "react-native";
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";

class ChatScreen extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
                <NavigationHeader title={"뮤글 거래소"} navigation={this.props.navigation}/>
                <Text style={{fontSize: 15}}>게시판</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ChatScreen;