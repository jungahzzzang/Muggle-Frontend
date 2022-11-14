import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import {createStackNavigator} from "@react-navigation/stack";
import MainTab from "./MainTab";
import BoardScreen from "../screenss/Board/BoardScreen";
import ChatScreen from "../screenss/chat/ChatScreen";

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
        </Stack.Navigator>
    );
}

export default MainStack;