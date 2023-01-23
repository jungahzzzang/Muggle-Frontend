import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import {useNavigation} from "@react-navigation/core";
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";

const navigation = useNavigation();

const BoardScreen = () =>{ 

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <NavigationHeader title={"뮤글 게시판"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
                <Text style={{fontSize: 24}}>게시판</Text>
             </SafeAreaView>
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BoardScreen;