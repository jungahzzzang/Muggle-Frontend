import React, {useContext} from "react";
import {ThemeContext} from "styled-components";
import {createStackNavigator} from "@react-navigation/stack";
import MainTab from "./MainTab";
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
            <Stack.Screen name="Write" component={BoardWriteScreen}/>
            <Stack.Screen name="BoardDetail" component={BoardDetailScreen}/>

            <Stack.Screen name="MyPage" component={MyPageListScreen} />
            <Stack.Screen name="FAQ" component={FAQScreen} />
            <Stack.Screen name="NoticeList" component={NoticeListScreen} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Terms" component={TermsScreen} />

            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="ChatList" component={ChatListScreen} />
            <Stack.Screen name="BuyChat" component={BuyChatScreen} />
            <Stack.Screen name="SaleChat" component={SaleChatScreen} />

            <Stack.Screen name="Goods" component={GoodsScreen} />
            <Stack.Screen name="GoodsUpload" component={GoodsUploadScreen}/>
            <Stack.Screen name="GoodsDetail" component={GoodsDetailScreen}/>

            <Stack.Screen name="MusicalDetail" component={MusicalDetailScreen}/>
        </Stack.Navigator>
    )
}

export default MainStack;