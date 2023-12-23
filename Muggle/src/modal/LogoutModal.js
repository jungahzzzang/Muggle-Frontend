import React, {useState} from "react";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useLogoutModal } from "./useModal";
import ModalButton from "./ModalButton";
import ModalSheet from "./ModalSheet";
import NaverLogin from '@react-native-seoul/naver-login';
import { logout} from '@react-native-seoul/kakao-login';
import { defaultFontText as Text } from "../components/shared/Text";

export default function LogoutModal() {

    const {isModalOpen, closeModal} = useLogoutModal();
    const navigation = useNavigation();
    const [kakaoToken, setKakaoToken] = useState('');
    const [naverToken, setNaverToken] = React.useState(null);

    function logoutALL() {
        AsyncStorage.clear();

        signOutWithNaver();

        signOutWithKakao();

        navigation.navigate('Login');
        
        closeModal();
    }

    const signOutWithKakao = async() => {
        try {
            const message = await logout();
            console.log(message);
            setKakaoToken('');
        }catch (err) {
            console.log('signOut error', err);
        }
    };

    const signOutWithNaver = async () => {
        await NaverLogin.logout();
        setNaverToken('');
    };

    return (
        <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
            <ModalContainer>
                <Text>로그아웃 하시겠어요?</Text>
                <Row>
                    <ModalButton
                        onPress={logoutALL}
                        text={'예'}
                        white
                        width={'110px'}
                        outline
                    />
                    <ModalButton
                        onPress={closeModal}
                        text={'아니오'}
                        width={'110px'}
                    />
                </Row>
            </ModalContainer>
        </ModalSheet>
    )
}

const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 136px;
  padding: 16px;
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 232px;
`;