import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const AuthStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, headerTitleAlign: 'center'}}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthStack;