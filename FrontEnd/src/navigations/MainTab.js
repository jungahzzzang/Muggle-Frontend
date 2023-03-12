import React, {useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from "styled-components";
//각 페이지
import MainScreen from "../screens/main/MainScreen";
import BoardScreen from "../screens/board/BoardScreen";
import ProfileScreen from "../screens/mypage/profile/ProfileScreen";
import GoodsScreen from "../screens/goods/GoodsScreen";
import TheaterSearchScreen from "../screens/musical/TheaterSearchScreen";

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
                    headerShown: false,
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'home' : 'home-outline',
                    }),
                }}
            />
            <Tab.Screen
                name="뮤글 공연장"
                component={TheaterSearchScreen}
                options={{
                    headerStyle: {
                        height: 40
                    },
                    headerTitleStyle:{
                        fontSize: 13
                    },
                    headerTintColor: "#1D5349",
                    tabBarIcon :({ focused }) => {
                        return (
                            <MaterialIcons name='theater-comedy' size={26}
                            color={focused ? theme.tabActiveColor : theme.tabInactiveColor}/>
                        )
                    }
                }}
            />
             <Tab.Screen
                name="뮤글거래소"
                component={GoodsScreen}
                options={{
                    headerStyle: {
                        height: 40
                    },
                    headerTitleStyle:{
                        fontSize: 13
                    },
                    headerTintColor: "#1D5349",
                    tabBarIcon :({ focused }) => {
                        return (
                            <MaterialCommunityIcons name={focused ? 'ticket-confirmation': 'ticket-confirmation-outline'} size={26}
                            color={focused ? theme.tabActiveColor : theme.tabInactiveColor}/>
                        )
                    }
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
                    tabBarIcon :({ focused }) => {
                        return (
                            <MaterialCommunityIcons name={focused ? 'pencil-circle' : 'pencil-circle-outline'} size={26}
                            color={focused ? theme.tabActiveColor : theme.tabInactiveColor}/>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="마이페이지"
                component={ProfileScreen}
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