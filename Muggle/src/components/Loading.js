import { ActivityIndicator, Image, View } from "react-native";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { value } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";

const LogoWrapper = styled.View`
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.Image`
    width: 60%;
    height: 60%;
`;

const Loader = styled.View`
    flex: 1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const Loading = ({navigation}) => {

    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimation(false);
            AsyncStorage.getItem('user_token').then(value=>
                navigation.navigate(value != null ? 'AuthStack' : 'MainStack'),
            )
        }, 3000);
    }, [navigation]);

    return (
        <Loader>
            <LogoWrapper>
                <Logo source={require('../assets/logo/muggle_logo.png')}/>
            </LogoWrapper>
            <ActivityIndicator color={'#22AFFC'} animating={animation} />
        </Loader>
    )
}

export default Loading;