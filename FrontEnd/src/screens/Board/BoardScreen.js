import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";
import GoodsScreen from "./GoodsScreen";

class BoardScreen extends React.Component {

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{fontSize: 24}}>게시판</Text>
                </View>
            </ScrollView>   
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BoardScreen;