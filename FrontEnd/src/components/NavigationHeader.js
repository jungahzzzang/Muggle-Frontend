import React from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"
import { defaultFontText as Text } from "../components/Text";

//네비게이션 헤더 생성
const NavigationHeader = ({title, leftIcon, leftIconName, rightIcon, rightButton, rightIconName, rightIconName2, onPressLeft, onPressRight, onPressRight2}) => {

  const navigation = useNavigation();

  if(leftIcon && rightIcon){
    return (
      <View style={styles.container}>
        {(navigation) ?
          (<View style={styles.leftContainer}>
            <TouchableOpacity onPress={onPressLeft}>
              <Icon name={leftIconName} size={24}/>
            </TouchableOpacity>
          </View> ) : null
        }
          <Text style={styles.middleContainer}>{title}</Text>
        {(navigation) ?
          (<View style={styles.rightContainer}>
            <TouchableOpacity onPress={onPressRight}>
              <Icon name={rightIconName} style={styles.rightIcon} size={24}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRight2}>
              <Icon name={rightIconName2} style={styles.rightIcon} size={24}/>
            </TouchableOpacity>
          </View> ) :null
        }
      </View>
    )
  }else if(leftIcon) {
    return (
      <View style={styles.container}>
        {(navigation) ?
          (<View style={styles.leftContainer}>
            <TouchableOpacity onPress={onPressLeft}>
              <Icon name={leftIconName} size={24}/>
            </TouchableOpacity>
           </View> ) : null
        }
        <Text style={styles.middleContainer}>{title}</Text>
      </View>
    )
  }else if(rightIcon){
    return (
      <View style={styles.container}>
        <Text style={styles.middleContainer}>{title}</Text>
        {(navigation) ?
            (<View style={styles.rightContainer}>
            <TouchableOpacity onPress={onPressRight} >
              <Icon name={rightIconName} style={styles.rightIcon} size={24}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRight2}>
              <Icon name={rightIconName2} style={styles.rightIcon} size={24}/>
            </TouchableOpacity>
            </View> ) : null
        }
      </View>
    )
  }else if(rightButton){
    return (
      <View style={styles.container}>
        <Text style={styles.middleContainer}>{title}</Text>
        {(navigation) ?
            (<View style={styles.rightContainer}>
            <TouchableOpacity onPress={onPressRight} style={styles.rightButton}>
              <Text style={styles.buttonText}>{rightBtnText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRight2} style={styles.rightButton}>
              <Text style={styles.buttonText}>{rightBtnText2}</Text>
            </TouchableOpacity>
            </View> ) : null
        }
      </View>
    )
  } else {
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
      justifyContent: 'space-between',
      padding: 15,
      marginBottom: 15,
      borderBottomWidth:1,
      borderBottomColor:"#eee"
    },
    leftContainer: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
    }, 
    rightContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    middleContainer: {
      flex: 2,
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10,
      fontSize: 16,
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
    rightButton: {
      backgroundColor: "#1D5349",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width: 40
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: 'white',
    },
    rightIcon: {
      paddingHorizontal: 20,
      resizeMode: 'contain',
    },
    iconBack: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#D6D6D6',
      marginTop: 3,
    }
  });

  export default NavigationHeader;