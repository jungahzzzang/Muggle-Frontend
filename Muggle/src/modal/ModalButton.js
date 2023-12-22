import React, {useContext} from "react";
import styled, { ThemeContext } from "styled-components";
import { defaultFontText as Text } from "../components/shared/Text";
import theme from '../theme';

export default function ModalButton({onPress, text, white, width, outline}) {

    const theme = useContext(ThemeContext);

    return (
        <Pressable
            onPress={() => onPress()}
            white={white}
            width={width}
            outline={outline}
        >
            <Text colors={white ? theme.buttonTitle : 'white'}>{text}</Text>
        </Pressable>
    )
}

const Pressable = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  height: 48px;
  border-radius: 24px;
  background-color: ${props => (props.white ? 'white' : theme.colors.main)};
  justify-content: center;
  align-items: center;

  border-width: ${({outline}) => (outline ? '2px' : '0px')};
  border-color: ${({outline}) => (outline ? theme.colors.main : 'white')};
`;