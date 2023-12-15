import React from "react";
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import { defaultFontText as Text } from "../../components/shared/Text";
import { useNavigation } from "@react-navigation/native";
import NavigationHeader from "../../components/shared/NavigationHeader";

const GoodsDetailScreen = ({route}) => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"뮤글 거래소"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                              rightIcon rightIconName={"pencil-outline"} onPressRight={() => navigation.navigate("Write")}/>
            <ScrollView>
                <View style={styles.context}>
                    <Image style={styles.uploadImg} source={route.params.img}/>
                    <View style={styles.profileContainer}>
                        <View style={styles.priceArea}>
                            <Text style={styles.priceText}>{route.params.itemPrice}</Text>
                        </View>
                        <View style={styles.chatOut}>
                            <TouchableOpacity style={styles.chat} >
                                <Text style={styles.chatText}>채팅으로 거래하기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.titleArea}>
                        <Text style={styles.titleText}>{route.params.itemTitle}</Text>
                    </View>
                    <View style={styles.detailArea}>
                        <Text style={styles.detailText}>{route.params.itemDetail}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    context: {
        flex: 3,
        flexDirection: 'column'
    },
    uploadImg: {
        width: '100%',
        height: 360,
    },
    profileContainer: {
        padding: 8,
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderColor: '#cfcfcf',
    },
    titleArea: {
        padding: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#565759',
    },
    detailArea: {
        marginLeft: 15,
        marginRight: 15,
    },
    detailText: {
        fontSize: 18,
        color: 'gray',
        lineHeight: 15
    },
    priceArea: {
        flex: 4,
        justifyContent: 'center'
    },
    priceText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    chat: {
        height: '70%',
        width: '80%',
        backgroundColor: '#8879B0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
    },
    chatOut: {
        flex: 4,
        height: 50,
        justifyContent: 'center',
        alignItems : 'flex-end'
    },
    chatText: {
        color: 'white',
        fontSize: 15,
    }
});

export default GoodsDetailScreen;