import React, {forwardRef, useState} from "react";
import {View, StyleSheet} from "react-native";
import {Searchbar} from "react-native-paper";
import styled from "styled-components";
import PropTypes from "prop-types";

const styles = StyleSheet.create({

    container: {
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "90%",
        margin: 15,
    },

    input: {
        width: "100%",
        fontSize: 16,
        borderRadius: 15,
        backgroundColor: "#d9dbda",
        marginTop: 5
    }
});

const SearchInput = ({placeholder, value, onChange}) => {

    //const [searchQuery, setSearchQuery] = useState("");

    //const onChangeSearch = query => setSearchQuery(query);

    return(
        <View>
            <View>
                <Searchbar
                    // left={<TextInput.Icon name={()=> <Ionicons name="search" size={20} color="black" />} />}
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={keyword => {onChange(keyword);}}
                    value={value}
                />
            </View>
        </View>
    );

};

// SearchBar.defaultProps = {
//     onBlur: () => {},
//     onChangeText: () => {},
// };

// SearchBar.propTypes = {
//     value : PropTypes.string.isRequired,
//     onChangeText: PropTypes.func,
//     onBlur: PropTypes.func,
//     placeholder: PropTypes.string
// }

export default SearchInput;