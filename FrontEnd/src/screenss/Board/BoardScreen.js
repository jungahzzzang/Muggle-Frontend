import React from "react";
import styled from "styled-components";
import {Text} from "react-native";

const Container = styled.View`
    flex: 1;
`;

const BoardScreen = () => {
    return(
        <Container>
            <Text style={{fontSize: 24}}>게시판</Text>
        </Container>
    )
}

export default BoardScreen;