import React, {useState} from "react";
import {FlatList, StyleSheet, View, TouchableOpacity} from "react-native";
import { defaultFontText as Text } from "../../components/Text";
import NavigationHeader from "../../components/NavigationHeader";

class MyPageListScreen extends React.Component {

    state  = {
        routes: [
            {title: '계정관리', name: 'ProfileScreen'},
            {title: '공지사항', name: 'NoticeListScreen'},
            {title: '앱 설정', name: 'SettingsScreen'},
            {title: '자주 묻는 질문', name: 'FAQScreen'},
            {title: '개인정보처리방침', name: 'PersonalInfoScreen'},
            {title: '서비스 이용약관', name: 'TermsScreen'},
        ]
    };

    render(){
        return (
                <View style={styles.container}>
                    <NavigationHeader title={"마이페이지"} navigation={this.props.navigation}/>
                        <FlatList
                            data={this.state.routes}
                            renderItem={({item}) => 
                                <Item
                                    item={item}
                                    navigate={this.props.navigation.navigate}
                                />
                            }
                            keyExtractor={item => item.name}
                        />
                </View>
        )
    }
}

function Item({ item, navigate }) {
    return (
        <TouchableOpacity style={styles.list} onPress = {() => navigate(item.name)}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        height: 70,
        alignItems: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    title: {
        fontSize: 17,
        paddingBottom: 5
    },
})

export default MyPageListScreen;
    
