import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NavigationHeader from "../../../components/NavigationHeader";
import ChatListScreen from "./ChatListScreen";
import BuyChatScreen from "./BuyChatScreen";
import SaleChatScreen from "./SaleChatScreen";

const ChatScreen = () => {

    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"뮤글 채팅방"}
                                leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()} />
            <Tab.Navigator 
                tabBarOptions={{
                    showLabel: true,
                    showIcon: true,
                    allowFontScaling: false,
                    keyboardHidesTabBar: true,
                    tabStyle: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
                }}
                initialRouteName="ChatList">
                <Tab.Screen name="전체" component={ChatListScreen} options={{headerShown: false}}/>
                <Tab.Screen name="판매" component={SaleChatScreen} options={{headerShown: false}}/>
                <Tab.Screen name="구매" component={BuyChatScreen} options={{headerShown: false}}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ChatScreen;