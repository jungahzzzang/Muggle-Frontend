import React, {useContext} from "react";
import styled, { ThemeContext } from "styled-components";
import { defaultFontText as Text } from "../components/shared/Text";

export default function ModalButton({onPress, text, white, width, outline}) {

    const theme = useContext(ThemeContext);

    return (
        <Pressable
            onPress={() => onPress()}
            white={white}
            width={width}
            outline={outline}
        >
            <Text colors={white ? '#8879B0' : 'white'}>{text}</Text>
        </Pressable>
    )
}

const Pressable = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  height: 48px;
  border-radius: 24px;
  background-color: ${props => (props.white ? 'white' : '#8879B0')};
  justify-content: center;
  align-items: center;

  border-width: ${({outline}) => (outline ? '2px' : '0px')};
  border-color: ${({outline}) => (outline ? '#8879B0' : 'white')};
`;