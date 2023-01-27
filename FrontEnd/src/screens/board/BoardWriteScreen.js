import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
var HBRichTextEditor = require('react-native-richtext-editor');
var HBToolbar = require('react-native-richtext-editor/HBToolbar');
import KeyboardSpacer from "react-native-keyboard-spacer";

const bodyForDisplay = "<p>Wow this is an <b>AMAZING</b> demo! </p>";

const BoardWriteScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <HBRichTextEditor
                    style={{
                        alignItems:'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0)'
                    }}
                    initialHTML={bodyForDisplay}
                />
                <HBToolbar />
                <KeyboardSpacer />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    }
})

export default BoardWriteScreen;