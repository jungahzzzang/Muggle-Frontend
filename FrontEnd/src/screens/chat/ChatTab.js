import React from "react";
import { View } from "react-native";
import NavigationHeader from "../../components/NavigationHeader";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import GoodsScreen from "./GoodsScreen";
import BoardScreen from "../Board/BoardScreen";
import ChatScreen from "./ChatScreen";

const topTab = createMaterialTopTabNavigator();

function BoardTab(){

    return(
        <>
            <NavigationHeader title={"채팅"}/>
            <topTab.Navigator>
            <topTab.Screen
                name="전체"
                component={GoodsScreen}
            />
            <topTab.Screen
                name="판매"
                component={BoardScreen}
            />
            <topTab.Screen
                name="구매"
                component={ChatScreen}
            />

        </topTab.Navigator>
        </>
    )
}

export default BoardTab;