import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";

export default class GoodsScreen extends React.Component {

    render(){
        return(
                <View style={styles.container}>
                    <NavigationHeader title={"뮤글 거래소"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()} rightIcon rightIconName={"chatbox-ellipses-outline"} rightIconName2={"search-outline"}/>
                    <Text style={{fontSize: 24}}>뮤글 거래소</Text>
                </View>
        )
    }
}

// const GoodsScreen = ({navigation}) => {
//     return(
//         <View style={styles.container}>
//         <NavigationHeader title={"뮤글거래소"} />
//         <Text style={{fontSize: 24}}>게시판</Text>
//     </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})