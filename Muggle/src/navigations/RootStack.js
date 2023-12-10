import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import Loading from "../components/Loading";

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen
                name="Loading"
                component={Loading}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="AuthStack"
                component={AuthStack}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MainStack"
                component={MainStack}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default RootStack;