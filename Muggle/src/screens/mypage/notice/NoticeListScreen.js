import React from "react";
import { StyleSheet, View, SafeAreaView, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/core";
import NavigationHeader from "../../../components/shared/NavigationHeader";
import { NoticeData } from "../../../assets/json/FlatData";
import NoticeAccordian from "./NoticeAccordian";

const NoticeListScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.list}>
            <NavigationHeader title={"뮤글 공지사항"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
                <View>
                    <FlatList
                    data={NoticeData}
                    keyExtractor={item => item.title}
                    renderItem={
                      ({item}) => {
                        return(
                          <NoticeAccordian title={item.title} body={item.body} date={item.date}/>
                        )
                      }
                    }
                  />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    safeArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
        list: {
        borderBottomColor: "#EAEAEA",
        borderBottomWidth: 1,
    },
    hidden: {
        height: 0,
    },
    notice: {
        height: 70,
        alignItems: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
      },
    title: {
        textAlign: 'center',
        fontSize: 17,
        paddingBottom: 5,
      },
      day: {
        color: "#888"
      },
      new: {
        position: "absolute",
        top: 6,
        left: -16,
        width: 8,
        height: 8,
        backgroundColor: "#DB4455",
        borderRadius: 30
      },
});

export default NoticeListScreen;