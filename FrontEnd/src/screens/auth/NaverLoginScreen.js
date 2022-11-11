import React from "react";
import ScreenContainer from "../../components/ScreenContainer";
import {WebView} from "react-native-webview";
import {NAVER_AUTH_URL} from "../../utils/OAuth.js";

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const NaverLoginScreen = () => {
    return (
        <ScreenContainer>
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={true}
                source={{uri: NAVER_AUTH_URL}}   
                javaScriptEnabled={true}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                onMessage={
                    async(event) => {
                        navigation.navigate('Main')
                    }}
            />          
        </ScreenContainer>
    )
}

export default NaverLoginScreen;