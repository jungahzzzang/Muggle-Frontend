import React, {useState} from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, LayoutAnimation } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import { defaultFontText as Text } from "../../components/Text";
import NavigationHeader from "../../components/NavigationHeader";
import { NoticeData } from "../../assets/json/FlatData";

const NoticeListScreen = () => {

    const [isOpen, setIsOpen] = useState(false);
    const onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpen(!isOpen);
    }

    return(
        <View style={styles.container}>
            {/* <NavigationHeader title={"뮤글 공지사항"} navigation={this.props.navigation} /> */}
            <FlatList
                data={NoticeData}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.notice} onPress={onPress} activeOpacity={1}>
                        <Text style={styles.day}>{item.date}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                        <Icon name={isOpen ? "chevron-up-outline" : "chevron-down-outline"} size={18} color="black" />
                        </TouchableOpacity>
                )}
                keyExtractor={(item,index)=>index}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
      }
});

export default NoticeListScreen;