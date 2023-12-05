import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

const Navigation = () => {

    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
};

export default Navigation;