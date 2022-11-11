import React, {useEffect, useState, useRef} from 'react';
import {WebView} from 'react-native-webview';
import ScreenContainer from '../../components/ScreenContainer';
import {KAKAO_AUTH_URL, kakaoClientId, kakaoRedirectURL} from '../../utils/OAuth';
import axios from 'axios';
import qs from 'qs';
import {useSetRecoilState} from "recoil";
import { memberTokenState } from "../../state/MemberState";

// const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoLoginScreen = ({navigation}) => {

    //const navigation = useNavigation();
    //const setToken = useSetRecoilState(memberTokenState);

    // const onNavigationStateChange = (webViewState) => {

    //     const url = webViewState.url;
    //     let accessToken;
    //     let isCreated = true;
    //     let success = true;

    //     if(url.split("?").length <= 1){
    //         return;
    //     }

    //     url
    //         .split("?")[1]
    //         .split("&")
    //         .forEach((param) => {
    //             const key = param.split("=")[0];
    //             if(key === "access_token"){
    //                 accessToken = param.split("=")[1];
    //             }else if(key === "is_created"){
    //                 isCreated = param.split("=")[1];
    //             }else if(key === "success"){
    //                 success = param.split("=")[1];
    //             }
    //         });
    //     if(!success){
    //         console.log("login Fail");
    //         return;
    //     }

    //     if(accessToken){
    //         setToken(accessToken);
    //         if(isCreated === "true"){
    //             navigation.navigate("Register");
    //         }else{
    //             navigation.navigate("Main");
    //         }
    //     }
    // }

    // webView = {
    //     canGoBack: false,
    //     ref: null
    // }

    // useEffect(() => {
    //     const backAction = () => {
    //         if(this.webView.canGoBack && this.webView.ref){
    //             this.webView.ref.goBack();
    //             return true;
    //         }else{
    //             Alert.alert('메인 페이지로 돌아갈까요?', [
    //                 { text: '아니요', onPress: () => null,},
    //                 { text: '네', onPress: () => navigation.navigate('Main') }
    //             ]);

    //             return true;
    //         }};

    //         const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    //         return () => backHandler.remove([navState.canGoBack])
    // }, [])

    const getCode = (target) => {
        //access code는 url에 붙어 장황하게 날아온다.
        //substring으로 url에서 code= 뒤를 substring하면 된다.

        console.log("beginning of getCode")
        console.log(target)

        const exp = "code=";
        var condition = target.indexOf(exp);
        console.log(`condition: ${condition}`)

        if(condition != 1){

            const requestCode = target.substring(condition + exp.length);

            console.log("*****access code***** = "+ requestCode);

            //토큰값 받기
            requsetToken(requestCode);
        }
    };

    const requsetToken = async (request_code) => {

        console.log("beginning of requestToken")

        var requestTokenUrl = "https://kauth.kakao.com/oauth/token";

        const options = qs.stringify({
            grant_type: 'authorization_code',
            client_id: kakaoClientId,
            redirect_uri: kakaoRedirectURL,
            request_code
        });

        try{
            
            console.log("before axios post")
            
            const tokenResponse = await axios.post(requestTokenUrl, options);
            const ACCESS_TOKEN = tokenResponse.data.access_token;

            console.log("after axios post")

            const body = {
                ACCESS_TOKEN,
            };
            console.log("before post")

            const response = await axios.post(kakaoRedirectURL, body);
            const value = response.data;
            const result = await storeUser(value);

            if (result === 'stored') {
                const user = await getData('user');
                dispatchEvent(read_S(user));
                await navigation.navigate('Main');
            }
            
            console.log(response)
        }catch(e){
            console.log(e);
        }
    };

    return (
         <ScreenContainer>
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={true}
                source={{
                    uri: KAKAO_AUTH_URL
                }}
                javaScriptEnabled={true}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                onMessage={ (event) => {
                    //LogInProgress(event.nativeEvent["url"]);
                    const data = event.nativeEvent.url;
                    getCode(data);
                    //onMessage... : webView에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
                }}

                //onNavigationStateChange={onNavigationStateChange}
            />
        </ScreenContainer>
    );
}

export default KakaoLoginScreen;
