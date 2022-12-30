import React from "react";
import { View } from "react-native";
import NavigationHeader from "../../components/NavigationHeader";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import GoodsScreen from "./GoodsScreen";
import BoardScreen from "./BoardScreen";
import ChatScreen from "./ChatScreen";

const topTab = createMaterialTopTabNavigator();

function BoardTab(){

    return(
        <topTab.Navigator>
            <topTab.Screen
                name="굿즈거래소"
                component={GoodsScreen}
            />
            <topTab.Screen
                name="자유게시판"
                component={BoardScreen}
            />
            <topTab.Screen
                name="채팅방"
                component={ChatScreen}
            />

        </topTab.Navigator>
    )
}

export default BoardTab;