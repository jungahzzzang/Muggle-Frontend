import React from "react";
import {View, TouchableOpacity, StyleSheet, SafeAreaView} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/core";
import Icon from "react-native-vector-icons/Ionicons"
import { defaultFontText as Text } from "../components/Text";

Icon.loadFont();

//네비게이션 헤더 생성
const NavigationHeader = ({ title, subtitle = null }) => {

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View>
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
      </View>
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
    safeArea: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
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

  export default NavigationHeader;