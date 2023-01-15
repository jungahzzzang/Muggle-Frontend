import React, {useState} from "react";
import PropTypes from 'prop-types'
import {View, TouchableOpacity, StyleSheet, SafeAreaView, Platform} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/core";
import Icon from "react-native-vector-icons/Ionicons"
import { defaultFontText as Text } from "../components/Text";

//네비게이션 헤더 생성
const NavigationHeader = ({title, leftIcon, leftIconName, rightIcon, rightIconName, rightIconName2, onPressLeft, onPressRight, onPressRight2}) => {

  const navigation = useNavigation();

  if(leftIcon && rightIcon){
    return (
      <View style={styles.container}>
        {(navigation) ?
          (<View style={styles.left}>
            <TouchableOpacity onPress={onPressLeft}>
              <Icon name={leftIconName} size={24}/>
            </TouchableOpacity>
          </View> ) : null
        }
          <Text style={[styles.title, {marginRight: 14}]}>{title}</Text>
        {(navigation) ?
          (<View style={styles.right}>
            <TouchableOpacity onPress={onPressRight}>
              <Icon name={rightIconName} style={styles.rightIcon1} size={24}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRight2}>
              <Icon name={rightIconName2} style={styles.rightIcon2} size={24}/>
            </TouchableOpacity>
          </View> ) :null
        }
      </View>
    )
  }else if(leftIcon) {
    return (
      <View style={styles.container}>
        {(navigation) ?
          (<View style={styles.left}>
            <TouchableOpacity onPress={onPressLeft}>
              <Icon name={leftIconName} size={24}/>
            </TouchableOpacity>
           </View> ) : null
        }
        <Text style={[styles.title, { marginRight: 14 }]}>{title}</Text>
      </View>
    )
  }else if(rightIcon){
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { marginLeft: 14 }]}>{title}</Text>
        {(navigation) ?
            (<View style={styles.right}>
            <TouchableOpacity onPress={onPressRight} >
              <Icon name={rightIconName} style={styles.rightIcon1} size={24}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRight2}>
              <Icon name={rightIconName2} style={styles.rightIcon2} size={24}/>
            </TouchableOpacity>
            </View> ) : null
        }
      </View>
    )
  }else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      marginBottom: 15,
      borderBottomWidth:1,
      borderBottomColor:"#eee"
    },
    title: {
      flex: 1,
      textAlign: 'center',
      fontSize: 16,
      
    },
    left: {
      position: "absolute",
      top: 0,
      left: 20,
      height: 50,
      justifyContent: "center"
    },
    right: {
      flex: 1,
      position: "absolute",
      top: 0,
      height: 50,
      justifyContent: "center"
    },
    rightIcon1: {
      justifyContent: 'flex-start'
    },
    rightIcon2: {
      justifyContent: 'flex-end'
    },
    iconBack: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#D6D6D6',
      marginTop: 3,
    }
  });

  export default NavigationHeader;