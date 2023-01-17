import React, {useState, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./MainStack";

const Navigation = () => {

    // const [fontLoad, setFontLoad] = useState(false)

    // //font 불러오기
    // useEffect(() => {
    //     const Load = async()=>{
    //         await Font.loadAsync({
    //             'Galmuri' : require('../assets/fonts/Galmuri11.ttf')
    //         })
    //         setFontLoad(true)
    //     }
    //     Load()
    // },[])

    return(
        //fontLoad?
        <NavigationContainer>
           <MainStack />
        </NavigationContainer>
        //:
        //<View>
            //<Text>Loading...</Text>
        //</View>
    );
};

export default Navigation;