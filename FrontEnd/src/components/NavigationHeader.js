import React from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import { defaultFontText as Text } from "../components/Text";

Icon.loadFont();

//네비게이션 헤더 생성
export default function NavigationHeader({title, navigation, right}) {

    return (
        <View style={styles.container}>
            {/* back button이 필요한 경우 navigation을 받아야함*/}
            {(navigation) ? 
                (<View style={styles.backBtn}>
                    <TouchableOpacity
                        hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
                        onPress={() => {navigation.goBack();}}>
                            <Icon name={"chevron-back-outline"} size={24} />
                    </TouchableOpacity>
                </View> ) : null
            }
            {/* 헤더 타이틀 */}
            <Text style={styles.title}>{title}</Text>
            {/* 헤더 우측에 추가해야 하는 컴포넌트가 있을 경우 노출 */}
            {(right) ?
                (<View style={styles.right}>
                    {right}
                 </View>) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      paddingHorizontal: 10,
      position: "relative",
      borderBottomWidth: 1,
      borderBottomColor: "#eee"
    },
    backBtn: {
      position: "absolute",
      top: 0,
      left: 20,
      height: 50,
      justifyContent: "center"
    },
    title: {
      fontSize: 17
    },
    right: {
      position: "absolute",
      top: 0,
      right: 20,
      height: 50,
      justifyContent: "center"
    }
  });