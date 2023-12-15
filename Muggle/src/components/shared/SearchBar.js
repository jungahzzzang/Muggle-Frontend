import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import { defaultFontText as Text } from "./Text";

const SearchBar = ({term, onTermChange, onTermSubmit, placeholder}) => {

    return (
        <View style={styles.backgroundStyle}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder={placeholder}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
            <Icon name="search" size={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        //marginTop:30,
        backgroundColor:'#F0EEEE',
        height:50,
        marginHorizontal:15,
        borderRadius:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
       
        flex:1,
        fontSize:18,
        marginLeft:4
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})

export default SearchBar;