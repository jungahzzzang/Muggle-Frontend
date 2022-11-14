import React, {useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons"
import { ThemeContext } from "styled-components";
//각 페이지
import MainScreen from "../screenss/main/MainScreen";
import BoardScreen from "../screenss/Board/BoardScreen";
import MyPageScreen from "../screenss/mypage/MyPageScreen";
import ChatScreen from "../screenss/chat/ChatScreen";

const Tab = createBottomTabNavigator();

const TabBarIcon = ({focused, name}) => {
    const theme = useContext(ThemeContext);
    return(
        <Icon
            name={name}
            size={26}
            color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
        />
    );
};

const MainTab = () => {
    const theme = useContext(ThemeContext);
    return(
            <Tab.Navigator
            tabBarOptions={{
                activeTintColor: theme.tabActiveColor,
                inactiveTintColor: theme.tabInactiveColor,
            }}
        >
            <Tab.Screen
                name="메인페이지"
                component={MainScreen}
                options={{
                    headerStyle: {
                        height: 40
                    },
                    headerTitleStyle:{
                        fontSize: 13
                    },
                    headerTintColor: "#1D5349",
                    //headerShown: false,
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'home' : 'home-outline',
                    }),
                }}
            />
            <Tab.Screen
                name="게시판"
                component={BoardScreen}
                options={{
                    headerStyle: {
                        height: 40
                    },
                    headerTitleStyle:{
                        fontSize: 13
                    },
                    headerTintColor: "#1D5349",
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'cafe' : 'cafe-outline',
                    }),
                }}
            />
            <Tab.Screen
                name="채팅"
                component={ChatScreen}
                options={{
                    headerStyle: {
                        height: 40
                    },
                    headerTitleStyle:{
                        fontSize: 13
                    },
                    headerTintColor: "#1D5349",
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'notifications' : 'notifications-outline',
                    }),
                }}
            />
        
            <Tab.Screen
                name="마이페이지"
                component={MyPageScreen}
                options={{
                    headerStyle: {
                        height: 40
                    },
                    headerTitleStyle:{
                        fontSize: 13
                    },
                    headerTintColor: "#1D5349",
                    tabBarIcon: ({focused}) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'person' : 'person-outline',
                    }),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTab;