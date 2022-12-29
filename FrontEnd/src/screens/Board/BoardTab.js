import React from "react";
import { SafeAreaView } from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";
import GoodsScreen from "./GoodsScreen";
import BoardScreen from "./BoardScreen";

const Tab = createMaterialTopTabNavigator();

export default function BoardTab() {

        return(
            <SafeAreaView>
                <Tab.Navigator initialRouteName="Goods">
                    <Tab.Screen
                        name="Goods"
                        component={GoodsScreen}
                    />
                    <Tab.Screen
                    name="Board"
                    component={BoardScreen}
                    />
                </Tab.Navigator>
            </SafeAreaView>
       )
    
}