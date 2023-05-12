import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthPercentageToDP,
    heightPercentageToDP,
  } from 'react-native-responsive-screen';
//import {useDispatch} from 'react-redux';
import { login, logout, unlink, getProfile as getKakaoProfile, getAccessToken} from '@react-native-seoul/kakao-login';
import {getProfile, NaverLogin} from '@react-native-seoul/naver-login';
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../components/Text";
import Button from "../../components/Button";
import naverSecret from '../../utils/OAuth';
import naverClientId from "../../utils/OAuth";

const LoginScreen = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [kakaoToken, setKakaoToken] = useState('');
    const [naverToken, setNaverToken] = useState(null);
    //const dispatch = useDispatch();

    const naverKey = {
        kConsumerKey: naverClientId,
        kConsumerSecret: naverSecret,
        kServiceAppName: 'Muggle',
    };

    const signInWithKakao = async () => {
        try {
            const token = await login();
            const kakaoProfileResult = await getKakaoProfile();
            const accessToken = await getAccessToken();
            setKakaoToken(JSON.stringify(token));
            console.log(token);
            return fetch('http://localhost:8080/api/signin/kakao', {
                method: 'POST',
                body: JSON.stringify({kakaoProfileResult, accessToken}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setLoading(false);
                    if(responseJson.status === 200){
                        AsyncStorage.setItem('user_email', responseJson.email);
                        AsyncStorage.setItem('user_token', responseJson.token);
                        AsyncStorage.setItem('user_name', responseJson.username);
                    }else {
                        setErrortext(responseJson.message);
                        console.log('이메일 혹은 패스워드를 확인해주세요.');
                    }
                })
        }catch(err) {
            console.error('login err', err);
        }
    };

    const signOutWithKakao = async() => {
        try {
            const message = await logout();
            console.log(message);
            setKakaoToken('');
        }catch (err) {
            console.log('signOut error', err);
        }
    };

    const signInNaver = async props => 
        await new Promise((resolve, reject) => {
            NaverLogin.login(props, (err, token) => {
                setNaverToken(token);
                if(err) {
                    reject(err);
                    return;
                }
                resolve(token);
            });
        }).catch(error => {
            console.log(error);
        });
    
    const signInWithNaver = () => {
        signInNaver(naverKey).then(async resolvedToken => {
            try {
                const naverProfileResult = await getProfile(resolvedToken.accessToken);
                if (naverProfileResult.resultcode === '024') {
                    Alert.alert('로그인 실패', naverProfileResult.message);
                    return;
                }
                return fetch('http://localhost:8080/api/signin/naver', {
                    method: 'POST',
                    body: JSON.stringify(naverProfileResult),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(response => response.json())
                    .then(responseJson=> {
                        setLoading(false);
                        console.log('naver responseJson', responseJson);
                        if (responseJson.status === 200) {
                            AsyncStorage.setItem('user_email', responseJson.email);
                            AsyncStorage.setItem('user_token', responseJson.token);
                            AsyncStorage.setItem('user_name', responseJson.username);
                            
                        } else {
                            setErrortext(responseJson.message);
                            console.log('이메일 혹은 패스워드를 확인해주세요.');
                        }
                    })
                    .catch(error => {
                        setLoading(false);
                        console.error(error);
                    });
            } catch (error) {
                console.log(error);
            }
        });
    };

    const naverSignOut = () => {
        NaverLogin.logout();
        setNaverToken('');
    };
    
    const getProfile = async () => {
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
        <SafeAreaView style={styles.container}>
            <View style={styles.topArea}>
                <View style={styles.textArea}>
                    <Image source={require("../../assets/logo/muggle_logo.png")} style={styles.logo}/>
                    <Text style={styles.text}>머글들은 모르는 뮤덕들의 세계</Text>
                </View>
            </View>
            <View style={styles.btnArea}>
                <Button opt={"apple"} text="Apple 아이디 로그인" />
                <Button opt={"kakao"} text="카카오톡 아이디 로그인" handlePress={signInWithKakao}/>
                <Button opt={"naver"} text="네이버 아이디 로그인"  handlePress={signInWithNaver}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        paddingLeft: wp(10),
        paddingRight: wp(10),
        backgroundColor: '#8879B0',
        opacity: 0.9,
    },
    topArea: {
        marginTop: 30
    },
    titleArea: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: wp(3),
    },
    textArea: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 40
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
    },
    btnArea: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    naverBtn: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2DB400',
        marginBottom: 10,
      },
      kakaoBtn: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEE500',
        marginBottom: 10,
      },
      appleBtn: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
      },
      btnAppleText: {
        marginLeft: 10,
        fontSize: wp('4%'),
        fontWeight: 'bold',
        color: '#fff',
      },
      btnKakaoText: {
        marginLeft: 10,
        fontSize: wp('4%'),
        fontWeight: 'bold',
      },
      btnNaverText: {
        marginLeft: 10,
        color: 'white',
        fontSize: wp('4%'),
        fontWeight: 'bold',
      },
});

export default LoginScreen;