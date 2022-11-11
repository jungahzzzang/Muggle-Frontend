import React, {useEffect, useState} from "react";
import { Text } from "react-native";
import * as Font from 'expo-font';

//custom Font 설정 component
const CustomFont = ({children, style}) => {
    const [fonstLoad, setFontLoad] = useState(false)

    //font 불러오기
    useEffect(() => {
        Font.loadAsync({
            'Pretendard' : require('../../assets/fonts/Pretendard-Regular.ttf')
        })
        setFontLoad(true)
    },[])

    //배열 형식으로 폰트 fontStyle 변수에 담기
    let fontStyle = [{fontStyle: 'Pretendard'}]
    if(style){
        //style이 Array라면 concat으로 합치기
        if(Array.isArray(style)){
            fontStyle=fontStyle.concat(style)
        }else{
            //Array가 아니라면 push하기
            fontStyle.push(style)
        }
    }

    return (
        <Text style={{fontStyle}}>
            {children}
        </Text>
    )
}

export default CustomFont;