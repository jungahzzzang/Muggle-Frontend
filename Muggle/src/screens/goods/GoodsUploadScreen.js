import React, {useState} from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavigationHeader from "../../components/shared/NavigationHeader";

const GoodsUploadScreen = () => {

    const navigation = useNavigation();

    const [titleText, onChangeTitle] = React.useState(null);
    const [detailText, onChangeDetail] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <NavigationHeader title={"뮤글 거래 글쓰기"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                              rightIcon rightIconName={"pencil-outline"} onPressRight={() => navigation.navigate("Write")}/>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTitle}
                    value={titleText}
                    placeholder="글 제목을 입력하세요"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="가격을 입력하세요"
                />
                <TextInput
                    style={styles.inputDetail}
                    onChangeText={onChangeDetail}
                    value={detailText}
                    placeholder="게시글 내용을 작성해주세요."
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 50,
        borderBottomWidth: 0.2,
        borderColor: 'gray',
    },
    inputDetail: {
        height: 300,
        width: '100%',
        textAlignVertical: 'top'
    }
});

export default GoodsUploadScreen;