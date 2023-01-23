import React from "react";
import {StyleSheet, View, TouchableOpacity, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/core";
import { defaultFontText as Text } from "../../components/Text";
import NavigationHeader from "../../components/NavigationHeader";
import FlatListItem from "../../components/FlatListItem";
import {FlatData} from "../../assets/json/FlatData";
import Routes from "../../navigations/Routes";

const navigation = useNavigation();

const MyPageListScreen = () => {
    
    return (
            <ScrollView>
                <View style={styles.container}>
                    <NavigationHeader title={"마이페이지"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
                        <FlatListItem
                            title={FlatData[0].title}
                            onPress={() => this.props.navigation.navigate(Routes.Profile)}
                        />
                        <FlatListItem
                            title={FlatData[1].title}
                            onPress={() => this.props.navigation.navigate(Routes.NoticeList)}
                        />
                        <FlatListItem
                            title={FlatData[2].title}
                            onPress={() => this.props.navigation.navigate(Routes.Settings)}
                        />
                        <FlatListItem
                            title={FlatData[3].title}
                            onPress={() => this.props.navigation.navigate(Routes.FAQ)}
                        />
                        <FlatListItem
                            title={FlatData[4].title}
                            onPress={() => this.props.navigation.navigate(Routes.PersonalInfo)}
                        />
                        <FlatListItem
                            title={FlatData[5].title}
                            onPress={() => this.props.navigation.navigate(Routes.Terms)}
                        />
                </View>
            </ScrollView>
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
        fontSize: 17,
        paddingBottom: 5
    },
})

export default MyPageListScreen;
    
