import React from "react";
import { StyleSheet, Text, View} from "react-native";

export default function ListItem({item}) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        height: 80
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    }
})