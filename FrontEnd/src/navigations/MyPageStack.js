import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import FAQScreen from "../screens/mypage/FAQScreen";
import NoticeListScreen from "../screens/mypage/NoticeListScreen";
import PersonalInfoScreen from "../screens/mypage/PersonalInfoScreen";
import ProfileScreen from "../screens/mypage/ProfileScreen";
import SettingsScreen from "../screens/mypage/SettingsScreen";
import TermsScreen from "../screens/mypage/TermsScreen";

const Stack = createStackNavigator();

const MyPageStack = () => {

    const theme = useContext(ThemeContext);

    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerTintColor: theme.headerTintColor,
            cardStyle: {backgroundColor: theme.backgroundColor},
            headerBackTitleVisible: false,
        }}
    >
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="NoticeList" component={NoticeListScreen} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
    </Stack.Navigator>
}

export default MyPageStack;