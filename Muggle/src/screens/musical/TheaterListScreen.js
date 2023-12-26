import React , { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList} from "react-native";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../components/shared/Text";
import SearchBar from "../../components/shared/SearchBar";
import NavigationHeader from "../../components/shared/NavigationHeader";
import { getTheaterList } from "../../utils/api";

const TheaterListScreen = async () => {

    const navigation = useNavigation();

    const theater = await getTheaterList();

    const refinedData = Object.keys(theater).map(key => theater[key].map(v => ({ ...v,
        date: key
      }))).flat();

    // const [loading, setLoading] = useState(false);
    // const [theater, setTheater] = useState([]);
    
    // const getTheaterList = async() => {

    //     setLoading(true);
    //     const html = await getHTML();

    //     const $ = cheerio.load(html.data);
    
    //     const $child = $(".theater-right>div>a");
    
    //     let dataArr = [];
    
    //     $child.each((idx, node) => {
    //         const title = $(node).text();
    //         const link = $(node).attr("href");
    
    //         if (title == "") {
    //             return;
    //         }
    
    //         const param = link.split('/');
    
    //         //오브젝트 형식으로 배열 담기
    //         dataArr.push({
    //             title: title,
    //             musicalId: param[2]
    //         })
    //     });

    //     setTheater(dataArr);
    // }

    // useEffect(() => {
    //     getTheaterList();
    // }, []);

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"극장 검색"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
            <SearchBar placeholder={"찾으시는 극장명을 입력해 주세요."}/>
            <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={refinedData}
                    keyExtractor={(item) => item.musicalId}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.musicalId}</Text>
                        </View>
                    )}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default TheaterListScreen;