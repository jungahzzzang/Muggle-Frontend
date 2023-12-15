import React, {useState, useRef} from "react";
import { StyleSheet, View, SafeAreaView, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {actions, defaultActions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import KeyboardSpacer from "react-native-keyboard-spacer";
import HTMLView from "react-native-htmlview";
import { defaultFontText as Text } from "../../components/shared/Text";
import NavigationHeader from "../../components/shared/NavigationHeader";

const BoardWriteScreen = () => {

    const navigation = useNavigation();

    const RichText = useRef();
    const [article, setArticle] = useState("");

    function editorInitializedCallback() {
        RichText.current?.registerToolbar(function (items) {
            console.log(
                "Toolbar click, selected items (insert end callback): ",
                items
            );
        });
    }

    function handleHeightChange(height) {

    }

    function onPressAddImage() {
        RichText.current?.insertImage (
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
        )
    }

    function insertVideo() {
        // you can easily add videos from your gallery
        RichText.current?.insertVideo(
          "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
        );
      }
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                <NavigationHeader title={"게시글 작성"} leftIcon leftIconName={"close-outline"} onPressLeft={() => navigation.goBack()}
                                  rightButton rightBtnText={"Save"}/>
                    <RichEditor
                        disabled={false}
                        containerStyle={styles.editor}
                        ref={RichText}
                        style={styles.rich}
                        placeholder={"게시글을 입력해 주세요."}
                        onChange={(text) => setArticle(text)}
                        editorInitializedCallback={editorInitializedCallback}
                        onHeightChange={handleHeightChange}
                    />
                    <RichToolbar
                        style={styles.richBar}
                        disabled={false}
                        editor={RichText}
                        onPressAddImage={onPressAddImage}
                        selectedIconTint={"pink"}
                        insertVideo={insertVideo}
                    />
                    <Text style={styles.text}>Result</Text>
                    <HTMLView value={article} stylesheet={styles} />
                    <KeyboardSpacer />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    editor: {
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
    },
    rich: {
        minHeight: 300,
        flex: 1
    },
    richBar: {
        height: 50,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
})

export default BoardWriteScreen;