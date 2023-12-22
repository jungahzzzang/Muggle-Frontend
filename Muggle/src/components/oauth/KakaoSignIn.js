import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login, unlink, getProfile, getAccessToken} from '@react-native-seoul/kakao-login';
import Button from "../shared/Button";
import { kakaoRedirectURL } from "../../utils/OAuth";

const KakaoSignIn = ({navigation}) => {

    const [loading, setLoading] = React.useState(false);
    const [errortext, setErrortext] = useState('');
    const [kakaoToken, setKakaoToken] = useState('');

    const kakaoLogin = async () => {
        try {
            const token = await login();
            const kakaoProfileResult = await getProfile();
            const accessToken = await getAccessToken();
            setKakaoToken(JSON.stringify(token));
            console.log(kakaoProfileResult);
            return fetch(`${kakaoRedirectURL}`, {
                method: 'POST',
                body: JSON.stringify({kakaoProfileResult, accessToken}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setLoading(false);
                    console.log(JSON.stringify(responseJson));
                    if(responseJson.status === 200){
                        AsyncStorage.setItem('user_email', responseJson.email);
                        AsyncStorage.setItem('user_token', responseJson.token);
                        AsyncStorage.setItem('user_name', responseJson.username);
                        navigation.navigate("MainStack");
                    }else {
                        setErrortext(responseJson.message);
                        console.log('이메일 혹은 패스워드를 확인해주세요.');
                    }
                })
        }catch(err) {
            console.error('login err', err);
        }
    };

    const getKakaoProfile = async () => {
        try {
            const profile = await getKakaoProfile();
            setKakaoToken(JSON.stringify(profile));
        } catch(err) {
            console.error('signOut err', err);
        }
    };

    const unlinkKakao = async () => {
        try {
            const message = await unlink();
            setKakaoToken(message);
        } catch(err) {
            console.error('signOut error', err);
        }
    };


    return (
        <Button opt={"kakao"} text="카카오톡 아이디 로그인" handlePress={kakaoLogin}/>
    )
}

export default KakaoSignIn;