import React from "react";
import styled from "styled-components";
import {Dimensions, View, StyleSheet, TextInput} from "react-native";

const StyledInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.inputPlaceholder,
}))`
    width: ${({width})=>width-60}px;
    margin: 20px 0;
    min-height: 50px;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 16px;
    color: ${({theme})=>theme.text};
`;

const ReplyInput = ({placeholder, value, onChangeText, onSubmitEditing, onPress}) => {

    const width = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <StyledInput
                width={width}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5,
        paddingRight: 10,
        fontSize: 16
    }
});

export default ReplyInput;