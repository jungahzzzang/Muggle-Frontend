import React from "react";
import styled from "styled-components";
import { StyleSheet, View, SafeAreaView, TextInput, Button, Dimensions } from "react-native";
import {ListItem} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../components/Text";
import BoardInfo from "../../components/BoardInfo";
import ReplyInput from "../../components/ReplyInput";
import NavigationHeader from "../../components/NavigationHeader";

const Container = styled.View`
    flex: 1;
    width: ${({width})=>width}px;
    flex-direction: column;
    background-color: ${({theme})=>theme.appBackground};
    align-items: center;
    padding-bottom: 100px;
    justify-content: center;
`

const List=styled.ScrollView`
    flex: 1;
    width: ${({width})=>width}px;
    padding-left: 20;
`;

const replyContainer = styled.View`
    flex: 1;
    position: absolute;
    bottom: 0;
    background-color: ${({theme})=>theme.background};
    align-items: center;
`

const Box=styled.View`
    height:20px;
    width: 10px;
`;

const BoardDetailScreen = ({route}) => {

    const navigation = useNavigation();
    const width= Dimensions.get('window').width;

    return (
        <SafeAreaView style={styles.container} width={width}>
            <NavigationHeader title={"게시판 글읽기"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                              rightIcon rightIconName={"pencil-outline"} onPressRight={() => navigation.navigate("Write")}/>
            {/* 프로필사진 + 이름 + 시간 */}
            {/* <View style={styles.writer}>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{route.params.author}</ListItem.Title>
                        <ListItem.Subtitle>{route.params.date}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View> */}
            <BoardInfo
                title={route.params.title}
                writer={route.params.author}
                writedate={route.params.date}
                content={route.params.body}
            />
            {/* 댓글 입력창 */}
            <View>
                <ReplyInput
                    placeholder="댓글을 입력하세요."
                    
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    writer: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    content: {
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    commenter: {
        backgroundColor: 'white',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
    }
})

export default BoardDetailScreen;