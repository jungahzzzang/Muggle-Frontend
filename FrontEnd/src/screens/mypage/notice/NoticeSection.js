import React, {useState, useCallback} from "react";
import { View, FlatList, LayoutAnimation, TouchableOpacity, StyleSheet } from "react-native";
import { defaultFontText as Text } from "../../../components/Text";
import Icon from "react-native-vector-icons/Ionicons"
import { NoticeData } from "../../../assets/json/FlatData";

const NoticeSection = ({ title, items }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }, []);

    return(
        <>
            <TouchableOpacity>
                <Text>{title}</Text>
                <Icon name={isOpen ? "chevron-up-outline" : "chevron-down-outline"} size={18} color="black" />
                <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                    <FlatList
                    data={NoticeData}
                    keyExtractor={(item)=>item}
                    renderItem={({item}) => (
                        <View style={styles.notice}>
                            <Text style={styles.day}>{item.date}</Text>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                    />
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
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
})