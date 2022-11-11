import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import {View, Text} from "react-native";
import MainStack from './MainStack';
import * as Font from 'expo-font';

const Navigation = () => {

    const [fontLoad, setFontLoad] = useState(false)

    //font 불러오기
    useEffect(() => {
        const Load = async()=>{
            await Font.loadAsync({
                'Pretendard' : require('../../assets/fonts/Pretendard-Regular.ttf')
            })
            setFontLoad(true)
        }
        Load()
    },[])

    return(
        fontLoad?
        <NavigationContainer>
           <MainStack />
        </NavigationContainer>
        :
        <View>
            <Text>Loading...</Text>
        </View>
    );
};

export default Navigation;