import React from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../components/Text";
import NavigationHeader from "../../components/NavigationHeader";
import { BoardData } from "../../assets/json/FlatData";

const BoardScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"뮤글 게시판"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                              rightIcon rightIconName={"pencil-outline"} onPressRight={() => navigation.navigate("Write")}/>
            <FlatList
                data={BoardData}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('BoardDetail', item)}>
                        <View >
                            <Text>{item.title}</Text>
                            <Text>{item.author}</Text>
                            <Text>{item.date}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                windowSize={3}
                keyExtractor={item=>item['id']}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#d5d5d5",
        paddingTop: 15,
        paddingRight:20,
    },
    itemTextContainer:{
        flex:1,
        flexDirection: "column"
    },
    title: {
        fontSize: 20,
        fontWeight: 600
    },
    date: {
        fontSize: 12,
        color: '#a6a6a6',
    }
});

export default BoardScreen;