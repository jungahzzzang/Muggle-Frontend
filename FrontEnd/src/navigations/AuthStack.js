import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//각 페이지
import LoginScreen from '../screens/auth/LoginScreen';
import KakaoLoginScreen from '../screens/auth/KakaoLoginScreen';
import NaverLoginScreen from "../screens/auth/NaverLoginScreen";
import GithubLoginScreen from "../screens/auth/GithubLoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";

const Stack = createNativeStackNavigator();
// const screenOptions = {
//     headerShown: false,
// };

const AuthStack = () => {

    const theme = useContext(ThemeContext);

    return(
    
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center',
                //cardStyle: {backgroundColor: theme.backgroundColor},
            }}
        >
           <Stack.Screen name="Login" component={LoginScreen} />
           <Stack.Screen name="KakaoLoginScreen" component={KakaoLoginScreen} />
           <Stack.Screen name="NaverLoginScreen" component={NaverLoginScreen} />
           <Stack.Screen name="GithubLoginScreen" component={GithubLoginScreen} /> 
           <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
 
    );
};

export default AuthStack;