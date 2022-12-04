import React from "react";
import styled from "styled-components";
//import {Text} from "react-native";
import { defaultFontText as Text } from "../../components/Text";

const Container = styled.View`
    flex: 1;
`;

const MainScreen = () => {
    return(
        <Container>
            <Text style={{fontSize: 24}}>메인페이지</Text>
        </Container>
    )
}

export default MainScreen;