import React, {useEffect, useState} from "react";
import {StyleSheet, View, TouchableOpacity, ScrollView, FlatList, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import NavigationHeader from "../../components/shared/NavigationHeader";
import FlatListItem from "../../components/shared/FlatListItem";
import Routes from "../../navigations/Routes";
import {MyPageListData} from "../../assets/json/FlatData";
import {useLogoutModal, useUnRegisterCheckModal} from "../../modal/useModal";

const MyPageListScreen = () => {
    const navigation = useNavigation();
    const {openModal : setLogoutModalVisible} = useLogoutModal();
    const {openModal : openUnRegisterCheckModal} = useUnRegisterCheckModal();
    //const [logoutModalVisible, setLogoutModalVisible] = useState(false);

    return (

        <SafeAreaView style={styles.container}>
            <View>
                    <NavigationHeader title={"설정"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
                    <FlatListItem
                            title={MyPageListData[0].title}
                            onPress={() => navigation.navigate(Routes.Profile)}
                        />
                        <FlatListItem
                            title={MyPageListData[1].title}
                            onPress={() => navigation.navigate(Routes.NoticeList)}
                        />
                        <FlatListItem
                            title={MyPageListData[2].title}
                            onPress={() => navigation.navigate(Routes.Settings)}
                        />
                        <FlatListItem
                            title={MyPageListData[3].title}
                            onPress={() => navigation.navigate(Routes.FAQ)}
                        />
                        <FlatListItem
                            title={MyPageListData[4].title}
                            onPress={() => navigation.navigate(Routes.PersonalInfo)}
                        />
                        <FlatListItem
                            title={MyPageListData[5].title}
                            onPress={() => navigation.navigate(Routes.Terms)}
                        />
                </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
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
        paddingBottom: 5
    },
})

export default MyPageListScreen;