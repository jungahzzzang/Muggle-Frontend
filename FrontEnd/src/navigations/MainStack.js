import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import {createStackNavigator} from "@react-navigation/stack";
import MainTab from "./MainTab";
import BoardScreen from "../screens/Board/BoardScreen";
import ChatScreen from "../screens/Board/ChatScreen";
import FAQScreen from "../screens/mypage/FAQScreen";
import NoticeListScreen from "../screens/mypage/notice/NoticeListScreen";
import PersonalInfoScreen from "../screens/mypage/PersonalInfoScreen";
import ProfileScreen from "../screens/mypage/ProfileScreen";
import SettingsScreen from "../screens/mypage/SettingsScreen";
import TermsScreen from "../screens/mypage/TermsScreen";

const Stack = createStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);

    return(
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
            <Stack.Screen name="Board" component={BoardScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />

            <Stack.Screen name="FAQ" component={FAQScreen} />
            <Stack.Screen name="NoticeList" component={NoticeListScreen} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Terms" component={TermsScreen} />
        </Stack.Navigator>
    );
}

export default MainStack;