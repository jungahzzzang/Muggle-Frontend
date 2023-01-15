import React, {useState} from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, FlatList, TouchableOpacity, Image} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";
import { GoodsData } from "../../assets/json/FlatData";
import Routes from "../../navigations/Routes";

const GoodsScreen = () => {

    const [heart, setHeart] = useState(false);

    return(
        <SafeAreaView>
            <View style={styles.wrap}>
                <NavigationHeader title={"뮤글 거래소"}
                                  leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                                  rightIcon rightIconName={"chatbox-ellipses-outline"} onPressRight={() => navigation.navigate("Chat")}
                                  rightIconName2={"search-outline"}/>
                <FlatList
                    data={GoodsData}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.container}>
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