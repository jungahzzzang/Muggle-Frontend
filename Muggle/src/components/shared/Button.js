import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { defaultFontText as Text } from "./Text";
import appleIcon from "../../assets/login/appleIcon.png";
import kakaoIcon from "../../assets/login/kakaoIcon.png";
import naverIcon from "../../assets/login/naverIcon.png";

const Button = ({text, handlePress, opt}) => {

    let button;

    if(opt === 'normal') {
        button = (
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        )
    }

    if(opt === 'apple') {
        button = (
            <TouchableOpacity style={styles.apple} onPress={handlePress}>
                <Image style={styles.icons} source={appleIcon}/>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        )
    }

    if(opt === 'kakao') {
        button = (
            <TouchableOpacity style={styles.kakao} onPress={handlePress}>
                <Image style={styles.icons} source={kakaoIcon}/>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        )
    }

    if(opt === 'naver') {
        button = (
            <TouchableOpacity style={styles.naver} onPress={handlePress}>
                <Image style={styles.icons} source={naverIcon}/>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        )
    }

    return <>{button}</>;
};

const styles = StyleSheet.create({
    button: {
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#8879B0",
        borderRadius: 7,
        width: '100%',
        height: 52,
        marginBottom: 10,
    },
    apple: {
        flexDirection: "row",
        backgroundColor: "#000000",
        borderRadius: 7,
        width: '100%',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    kakao: {
        flexDirection: "row",
        backgroundColor: "#FFE812",
        borderRadius: 7,
        width: '100%',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    naver: {
        flexDirection: "row",
        backgroundColor: "#00CE5D",
        borderRadius: 7,
        width: '100%',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        color: "#FFFFFF",
        fontSize: wp('4%'),
        fontWeight: 'bold',
    },
    icons: { height: 20, width: 20, marginRight:10 },
});

export default Button;