import React from "react";
import { StyleSheet, View, TouchableOpacity} from "react-native";
import { defaultFontText as Text } from "../components/Text";

export default function ListItem({onPress, title}) {

    return (
        <TouchableOpacity style={styles.list} onPress={onPress}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        height: 80
    },
    list: {
        height: 70,
        alignItems: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        paddingBottom: 5
    }
})