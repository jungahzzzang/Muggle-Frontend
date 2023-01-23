import React, {useContext} from "react";
import {ThemeContext} from "styled-components";
import {createStackNavigator} from "@react-navigation/stack";
import MainTab from "./MainTab";
import BoardScreen from "../screens/board/BoardScreen";
import GoodsScreen from "../screens/chat/GoodsScreen";
import ChatScreen from "../screens/chat/ChatScreen";
import FAQScreen from "../screens/mypage/faq/FAQScreen";
import NoticeListScreen from "../screens/mypage/notice/NoticeListScreen";
import PersonalInfoScreen from "../screens/mypage/personalInfo/PersonalInfoScreen";
import ProfileScreen from "../screens/mypage/profile/ProfileScreen";
import SettingsScreen from "../screens/mypage/settings/SettingsScreen";
import TermsScreen from "../screens/mypage/terms/TermsScreen";

const Stack = createStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);

    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center',
                headerTintColor: theme.headerTintColor,
                cardStyle: {backgroundColor: theme.backgroundColor},
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name="Main" component={MainTab} />
            <Stack.Screen name="Goods" component={GoodsScreen} />
            <Stack.Screen name="Board" component={BoardScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />

            <Stack.Screen name="FAQ" component={FAQScreen} />
            <Stack.Screen name="NoticeList" component={NoticeListScreen} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Terms" component={TermsScreen} />
        </Stack.Navigator>
    )
}

export default MainStack;