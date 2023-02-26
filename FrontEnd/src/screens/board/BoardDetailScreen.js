import React from "react";
import { StyleSheet, View, SafeAreaView, TextInput,Button } from "react-native";
import {ListItem} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../components/Text";
import {BoardInfo} from "../../components/BoardInfo";
import NavigationHeader from "../../components/NavigationHeader";

const BoardDetailScreen = ({route}) => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"게시판 글읽기"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                              rightIcon rightIconName={"pencil-outline"} onPressRight={() => navigation.navigate("Write")}/>
            {/* 프로필사진 + 이름 + 시간 */}
            <View style={styles.writer}>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{route.params.author}</ListItem.Title>
                        <ListItem.Subtitle>{route.params.date}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
            {/* 제목+내용 */}
            <View style={styles.content}>
                <Text style={styles.title}>
                    {route.params.title}
                </Text>
                <Text>
                    {route.params.body}
                </Text>
            </View>
            {/* 댓글 입력창 */}
            <View>
                <TextInput
                    placeholder="댓글을 입력하세요."
                />
                <Button title="완료"/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
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