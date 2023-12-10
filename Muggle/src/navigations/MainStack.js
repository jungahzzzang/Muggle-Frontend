import React, {useContext} from "react";
import {ThemeContext} from "styled-components";
import {createStackNavigator} from "@react-navigation/stack";
import MainTab from "./MainTab";
import MainScreen from "../screens/main/MainScreen";
import BoardScreen from "../screens/board/BoardScreen";
import BoardDetailScreen from "../screens/board/BoardDetailScreen";
import GoodsScreen from "../screens/goods/GoodsScreen";
import ChatScreen from "../screens/goods/chat/ChatScreen";
import MyPageListScreen from "../screens/mypage/MyPageListScreen";
import FAQScreen from "../screens/mypage/faq/FAQScreen";
import NoticeListScreen from "../screens/mypage/notice/NoticeListScreen";
import PersonalInfoScreen from "../screens/mypage/personalInfo/PersonalInfoScreen";
import ProfileScreen from "../screens/mypage/profile/ProfileScreen";
import SettingsScreen from "../screens/mypage/settings/SettingsScreen";
import TermsScreen from "../screens/mypage/terms/TermsScreen";
import ChatListScreen from "../screens/goods/chat/ChatListScreen";
import BuyChatScreen from "../screens/goods/chat/BuyChatScreen";
import SaleChatScreen from "../screens/goods/chat/SaleChatScreen";
import BoardWriteScreen from "../screens/board/BoardWriteScreen";
import GoodsUploadScreen from "../screens/goods/GoodsUploadScreen";
import GoodsDetailScreen from "../screens/goods/GoodsDetailScreen";
import MusicalDetailScreen from "../screens/musical/MusicalDetailScreen";

const Stack = createStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={MainTab}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={MainScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Board"
                component={BoardScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Write"
                component={BoardWriteScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="BoardDetail"
                component={BoardDetailScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MyPage"
                component={MyPageListScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="FAQ"
                component={FAQScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="NoticeList"
                component={NoticeListScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="PersonalInfo"
                component={PersonalInfoScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Terms"
                component={TermsScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ChatList"
                component={ChatListScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="BuyChat"
                component={BuyChatScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SaleChat"
                component={SaleChatScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Goods"
                component={GoodsScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GoodsUpload"
                component={GoodsUploadScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GoodsDetail"
                component={GoodsDetailScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MusicalDetail"
                component={MusicalDetailScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default MainStack;