import React from "react";
import styled from "styled-components";
//import {Text} from "react-native";
import { defaultFontText as Text } from "../../components/Text";

const Container = styled.View`
    flex: 1;
`;

const ChatScreen = () => {
    return(
        <Container>
            <Text style={{fontSize: 24}}>게시판</Text>
        </Container>
    )
}

export default ChatScreen;