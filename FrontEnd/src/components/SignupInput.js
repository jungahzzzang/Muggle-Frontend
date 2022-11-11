import React, { useState } from "react";
import { TextInput } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
`;

const StyledTextInput = styled.TextInput`
    padding: 10px 10px;
    font-size: 16px;
    border: 1px solid
        ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
    border-radius: 4px;
`;

const SignupInput = ({userInput, setUserInput, onSubmit}) => {
    
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Container>
            <StyledTextInput
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                placeholder="닉네임을 입력해 주세요"
                onChangeText={(text) => setUserInput(text)}
                onSubmitEditing={onSubmit}
                clearTextOnFocus={false}
                allowFontScaling={false}
                value={userInput}
        />
        </Container>
    );
};

export default SignupInput;