import React from "react";
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity} from "react-native";
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthPercentageToDP,
    heightPercentageToDP,
  } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../components/Text";
import Button from "../../components/Button";

const LoginScreen = () => {

    const navigation = useNavigation();

    async function kakaoLogin() {
        const result = await KakaoLogins.login();
        if (result.err) {
            throw new Error(err.code);
        }
    
        console.log(`Login Finished:${JSON.stringify(result)}`);
        return;
    }

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
                <Button opt={"kakao"} text="카카오톡 아이디 로그인" handlePress={kakaoLogin}/>
                <Button opt={"naver"} text="네이버 아이디 로그인" />
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