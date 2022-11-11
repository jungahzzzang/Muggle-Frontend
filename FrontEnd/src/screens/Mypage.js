import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`;

const Mypage = () => {
    return(
        <Container>
            <Text style={{fontSize: 24}}>마이 페이지</Text>
            
        </Container>
    );
};

export default Mypage;