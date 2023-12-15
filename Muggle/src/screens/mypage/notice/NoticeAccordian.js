import React, {useState} from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { defaultFontText as Text } from "../../../components/shared/Text";
import Icon from "react-native-vector-icons/Ionicons"

const NoticeAccordian = ({title, body, date}) => {

    const [showContent, setShowContent] = useState(false);

    return(
        <View>
            <TouchableOpacity onPress={() => setShowContent(!showContent)}>
                <View style={styles.notice}>
                    <Text style={styles.day}>{date}</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Icon name={showContent ? "chevron-up-outline" : "chevron-down-outline"} size={18} color="black" />
                </View>
            </TouchableOpacity>
            {
                showContent && (
                    <View>
                        <Text style={styles.body}>{body}</Text>
                    </View>
                )
            }
        </View>
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
      body: {
        lineHeight: 30,
      },
      touchableOpacity: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }
});

export default NoticeAccordian;