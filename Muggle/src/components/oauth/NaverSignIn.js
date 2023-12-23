import React, {useEffect, useState} from "react";
import NaverLogin from '@react-native-seoul/naver-login';
import Button from "../shared/Button";
import { naverRedirectURL } from "../../utils/OAuth";
import { naverSecret }from '../../utils/OAuth';
import { naverClientId } from "../../utils/OAuth";

const naverKey = {
    consumerKey: naverClientId,
    consumerSecret: naverSecret,
    appName: 'Muggle',
    serviceUrlScheme: 'naverLogin'
};

const NaverSignIn = ({navigation}) => {

    const [loading, setLoading] = React.useState(false);
    const [naverToken, setNaverToken] = React.useState(null);
    const [success, setSuccessResponse] = useState();
    const [failure, setFailureResponse] = useState();
    const [response, setResponse] = useState();

    const getNaverUserInfo = async accessToken => {
        const profileResult = await NaverLogin.getProfile(accessToken);
        return fetch(`${naverRedirectURL}`,{
            method: 'POST',
            body: JSON.stringify(profileResult),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
          .then(responseJson=> {
            console.log('naver responseJson', responseJson);
            if (responseJson.status === 200) {
                AsyncStorage.setItem('user_email', responseJson.email);
                AsyncStorage.setItem('user_token', responseJson.token);
                AsyncStorage.setItem('user_name', responseJson.username);
                navigation.navigate();
            } else {
                console.log('이메일 혹은 패스워드를 확인해주세요.');
            }
          }).catch (error => {
            console.error(error);
          });
    }

    const signInWithNaver = async () => {
        const {successResponse, failureResponse} = await NaverLogin.login(naverKey);
        if (successResponse) {
            try {
                console.log(successResponse);
                getNaverUserInfo(successResponse.accessToken);
                setNaverToken(successResponse.accessToken);
                navigation.navigate('MainStack');
               // await AsyncStorage.setItem(profileResult.successResponse.accessToken);
                // navigation.navigate('MainTab', {
                //     screen: '메인페이지'
                // });
            } catch (error) {
                console.log(error);
            }
        } else {
            setFailureResponse(failureResponse);
        }
    }

    const deleteToken = async () => {
        await NaverLogin.deleteToken();
        setNaverData('');
    }

    useEffect(() => {
        if (naverToken !== null) {
            getNaverUserInfo();
        }
        return () => setLoading(false);
    }, [naverToken]);

    return (
        <Button opt={"naver"} text="네이버 아이디 로그인"  handlePress={signInWithNaver}/>
        /* <TouchableOpacity onPress={deleteToken}><Text>deleteToken</Text></TouchableOpacity>
        <TouchableOpacity onPress={naverSignOut}><Text>로그아웃</Text></TouchableOpacity> */
    )
}

export default NaverSignIn;