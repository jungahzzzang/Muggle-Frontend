import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"
import { defaultFontText as Text } from "../../components/Text";
import NavigationHeader from "../../components/NavigationHeader";
import { GoodsData } from "../../assets/json/FlatData";

const GoodsScreen = ({}) => {

    const navigation = useNavigation();

    const [heart, setHeart] = useState(false);

    return(
        <SafeAreaView style={styles.wrap}>
            <View>
                <NavigationHeader title={"뮤글 거래소"}
                                  leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                                  rightIcon rightIconName={"chatbox-ellipses-outline"} onPressRight={() => navigation.navigate("Chat")}
                                  rightIconName2={"search-outline"}/>
                <FlatList
                    data={GoodsData}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('GoodsDetail', item)}>
                            <Image source={item.img} style={styles.goodsImage}/>
                            <View style={styles.infoContainer}>
                                <Text style={styles.titleText}>{item.itemTitle}</Text>
                                <Text style={styles.priceText}>{item.itemPrice}</Text>
                                <TouchableOpacity style={styles.iconContainer} onPress={() => setHeart(!heart)}>
                                    <Icon
                                        name={item.heartClick ? 'heart':'heart-outline'}
                                        size={25}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item,index) => index.toString()}
                />
                <TouchableOpacity onPress={() => navigation.navigate('GoodsUpload')} style={styles.addBtn}>
                    <Text style={styles.addIcon}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row'
    },
    goodsImage: {
        width: 110,
        height: 110,
        borderRadius: 10
    },
    infoContainer: {
        margin: 5,
        paddingLeft: 10,
        flexDirection: 'column',
        height: '70%',
        width: '100%'
    },
    titleText: {
        fontSize: 15
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        padding: 10,
    }, 
    iconContainer: {
        alignItems: 'center',
        marginLeft: 50,
        marginTop: 35
    },
    addBtn: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#377D71',
        borderRadius: 30,
        elevation: 8
    },
    addIcon: {
        fontSize: 40,
        color: 'white'
    }
})
// export default class GoodsScreen extends React.Component {

//     render(){
//         return(
//                 <ScrollView>
//                      <View style={styles.container}>
//                         <NavigationHeader title={"뮤글 거래소"}
//                                         leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
//                                         rightIcon rightIconName={"chatbox-ellipses-outline"} onPressRight={() => navigation.navigate("Chat")}
//                                         rightIconName2={"search-outline"}/>
//                         <Text style={{fontSize: 24}}>뮤글 거래소</Text>
//                     </View>
//                 </ScrollView>
//         )
//     }
// }

// const GoodsScreen = ({navigation}) => {
//     return(
//         <View style={styles.container}>
//         <NavigationHeader title={"뮤글거래소"} />
//         <Text style={{fontSize: 24}}>게시판</Text>
//     </View>
//     )
// }



export default GoodsScreen;