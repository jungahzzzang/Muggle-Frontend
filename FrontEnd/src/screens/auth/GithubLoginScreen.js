import React from "react";
import ScreenContainer from "../../components/ScreenContainer";
import {WebView} from "react-native-webview";
import {GITHUB_AUTH_URL} from "../../utils/OAuth";

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const GithubLoginScreen = () => {
    return (
        <ScreenContainer>
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={true}
                source={{uri: GITHUB_AUTH_URL}}   
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

export default GithubLoginScreen;