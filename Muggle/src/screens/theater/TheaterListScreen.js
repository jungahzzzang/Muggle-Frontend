import React , { useCallback, useEffect, useState } from "react";
import axios from "axios";
const cheerio = require('cheerio');
import { StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../components/shared/Text";
import SearchBar from "../../components/shared/SearchBar";
import FlatListItem from "../../components/shared/FlatListItem";
import NavigationHeader from "../../components/shared/NavigationHeader";
import { MUSICAL_THEATER_URL } from "../../utils/OAuth";
import { number, string } from "prop-types";
//import { getTheaterList } from "../../utils/api";

export default function TheaterListScreen() {

    const navigation = useNavigation();

    const data = [];

    //const data = await getTheaterList();

    // const refinedData = Object.keys(theater).map(key => theater[key].map(v => ({ ...v,
    //     date: key
    //   }))).flat();

    const [loading, setLoading] = useState(true);
    const [theater, setTheater] = useState([]);

    const getHTML = async() => {
        try {
            return await axios.get(`${MUSICAL_THEATER_URL}`);
        } catch (error) {
            console.log(error);
        }
    }
    
    const getTheaterList = async () => {

        //setLoading(true);
       const html = await getHTML();
       const dataArr = [];

        const $ = cheerio.load(html.data);
    
        const $child = $(".theater-right>div>a");
    
        $child.each((idx, node) => {
            const title = $(node).text();
            const link = $(node).attr("href");
    
            if (title == "") {
                return;
            }
    
            const param = link.split('/');
    
            //오브젝트 형식으로 배열 담기
            dataArr.push({
                title: title,
                musicalId: param[2]
            })
        });

        setTheater(dataArr);
        setLoading(false);
    }

    useEffect(() => {
        getTheaterList();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"극장 검색"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <SearchBar placeholder={"찾으시는 극장명을 입력해 주세요."}/>
                {loading && <Text>로딩중...</Text>}
                {theater && (
                    <FlatList
                        data={theater}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('TheaterDetail', item)}>
                                <View>
                                    <Text style={styles.text}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.musicalId.toString()}
                    />
                )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    list: {
        height: 70,
        alignItems: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        paddingBottom: 5
    }
});
