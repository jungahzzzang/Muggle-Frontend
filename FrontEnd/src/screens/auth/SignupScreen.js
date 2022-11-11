import React, {useEffect, useState, useRef, useContext} from "react";
import {Keyboard, KeyboardAvoidingView, Text, Image, View, StyleSheet} from 'react-native';
//import AsyncStorage from "@react-native-community/async-storage";
//import { MemberApi } from "../../api/MemberApi";
import { PinkLogo } from "../../utils/Images";
import RNPickerSelect from 'react-native-picker-select';
import ScreenContainer from "../../components/ScreenContainer";
import SignupInput from "../../components/SignupInput";
import Button from "../../components/Button";
//import ScreenContainer from "../../components/ScreenContainer";

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        height: 50, 
        width: 300, 
        color: '#000000',
        borderColor: '#000000', 
        borderWidth: 1, 
        borderRadius: 12,
        padding: 10
    },
    inputAndroid: {
        fontSize: 16,
        height: 50, 
        width: 300, 
        color: '#000000',
        borderColor: '#000000', 
        borderWidth: 1, 
        borderRadius: 12,
        padding: 10
    },
})

export default function SignupScreen() {

    const [userInput, setUserInput] = useState("");

    // useEffect(() => {
    //     const fetchMemberInfo = async () => {
    //         setIsLoading(true);
    //         const newMemberInfo = await MemberApi.get(token);
    //         setMemberInfo(newMemberInfo);
    //         setIsLoading(false);
    //     };
    //     fetchMemberInfo();
    // }, []);

    // /*
    //     AsyncStorage 토큰 저장
    //     -비동기적(async)으로 데이터를 저장 or 불러오며, 영구적으로 저장시킴
    //     -앱이 다운되더라도 기존 저장된 변수 및 세팅 사항들이 보존됨.
    // */
    // const onSubmit = async () => {
    //     Keyboard.dismiss();
    //     setIsLoading(true);
    //     await AsyncStorage.setItem(TOKEN_STORAGE, token);

    //     try{
    //         await MemberApi.patchName(token, userInput);
    //         setMemberInfo({
    //             ...memberInfo,
    //             name: userInput,
    //         });

    //         const formData = new FormData();
    //         formData.append("profile_image", {
    //             uri: memberInfo.profile,
    //             type: "image/jpeg",
    //             name: memberInfo.profile.substring(9),
    //         });
    //         await MemberApi.postProfile(token, formData);
    //         //navigateWithoutHistory(navigation, "ApplicationNavigationRoot");
    //     }catch (error){
    //         console.log(error.response.data.message);
    //     }
    //     setIsLoading(false);
    // };

    return (
        <ScreenContainer>
            <View>
                <Image source={PinkLogo} style={{width: 300, height: 45}}/>
            </View>
            <View>
                <SignupInput
                    userInput={userInput}
                />
            </View>
            <View>
                <RNPickerSelect
                    fixAndroidTouchableBug={true}   //안드로이드에서 클릭을 여러 번 해야 나오는 에러 해결
                    useNativeAndroidPickerStyle={false} //기본 안드로이드 스타일 적용 거부
                    onValueChange={(value) => console.log(value)}
                    items={[
                        {label: 'Backend', value: 'backend'},
                        {label: 'Frontend', value: 'frontend'},
                    ]}
                    style={pickerSelectStyles}
                />
            </View>
            <View>
                <Button
                    title="모각코 시작하기"
                    //onPress={__handleSignupButtonPress}
                    //disabled={disabled}
                />
            </View>
        </ScreenContainer>
    );
};
