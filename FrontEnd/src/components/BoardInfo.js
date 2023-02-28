import React from "react";
import styled from "styled-components";
import { StyleSheet, Dimensions } from "react-native";
import { defaultFontText as Text } from "../components/Text";
import {theme} from "../theme";

const Container = styled.View`
    width: ${({ width }) => width - 40}px;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.background};
    margin: 20px 0 0 20px;
    padding: 15px 15px;
`;

const PostInfo = styled.View`
  width: ${({ width }) => (width - 40) * 0.92}px;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 6px;
  padding-bottom: 2px;
  margin: 0px;
`;

const PostInfo2 = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const Containerfortitle=styled.View`
    padding: 5px 0 15px 0;
    border-radius: 0;
    justify-content: center;
    flex-direction: column;
    background-color: ${({theme})=>theme.background};
    color: ${({theme})=>theme.text};
`;

const Line=styled.View`
    width: ${({ width }) => (width - 40)*0.92}px;
    height: 0.9px;
    background-color: ${({theme})=>theme.line};
`;

const Containerforcontent=styled.ScrollView`
    min-height: 300px;
    padding: 10px 10px 0 0;
    flex-direction: column;
    background-color: ${({theme})=>theme.background};
    color: ${({theme})=>theme.text};
`;

const BoardInfo = ({title, content, writer, writedate, reply}) => {

    const width = Dimensions.get('window').width;

    return (
        <Container width={width}>
            <Containerfortitle>
                <Text style={styles.titleText}>{title}</Text>
            </Containerfortitle>
        <Line width={width}/>
        <PostInfo width={width}>
            <Text style={styles.infoText}>작성자: {writer}</Text>
            <PostInfo2>
                <Text style={styles.infoText}>{writedate}</Text>
                <Text style={styles.infoText}>댓글 {reply}</Text>
            </PostInfo2>
        </PostInfo>
        <Line width={width} />
            <Containerforcontent>
                <Text style={styles.contentText}>{content}</Text>
            </Containerforcontent>
        </Container>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "column"
    },

    titleText : {
        fontSize: 18,
        fontWeight: "bold",
        color:'#000000',
    },
    infoText: {
        fontSize: 13,
        color: '#000000',
        paddingBottom: 5,
    },
    contentText: {
        fontSize: 16,
        lineHeight: 25
    }
});

export default BoardInfo;