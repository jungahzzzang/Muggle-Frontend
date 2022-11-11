import React from "react";
import styled from "styled-components";

const ScreenContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.background};
`   

export default ScreenContainer;