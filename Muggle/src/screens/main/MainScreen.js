import React, {useState} from "react";
import {useQuery, useQueryClient} from 'react-query'
import styled, {css} from "@emotion/native";
import { StyleSheet, View, SafeAreaView, Text, FlatList, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import { filterOnlyMusical } from "../../utils/util";
import { getMonthMusical } from "../../utils/api";
import MonthMusicalList from "../../components/musical/MonthMusicalList";
import Loading from "../../components/shared/Loading";
import NavigationHeader from "../../components/shared/NavigationHeader";
import SearchBar from "../../components/shared/SearchBar"

const images = [
    require("../../assets/banner/banner_sample1.png"),
    require("../../assets/banner/banner_sample2.png"),
    require("../../assets/banner/banner_sample3.png"),
];

const windowHeight = Dimensions.get('window').height;

const Container = styled.FlatList`
    background-color: white;
`
const MainScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const queryClient = useQueryClient();
    const {data: monthData, isLoading: isLoadingBOM} = useQuery(
        ['Musicals', 'BoxOfficeMonth'],
        getMonthMusical
    );

    const isLoading = isLoadingBOM;

    const filteredMusicalMonth = filterOnlyMusical(
        monthData?.boxofs?.boxof
    );
    
    const onRefresh = async () => {
        setRefreshing(true);
        await queryClient.refetchQueries(['Musicals']);
        setRefreshing(false);
    };

    if (isLoading) {
        return <Loading />;
    }
    return(
        <>
            <SafeAreaView style={styles.container}>
            <SearchBar placeholder={"극장명, 뮤지컬 제목을 입력해 주세요."}/>
                {monthData?
                    <Container
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        onEndReachedThreshold={1}   //끝지점이 어디를 의미하는지
                        //값을 직접 넘기지 않고 state에 담아 넘기면 로드 오류 발생
                        ListHeaderComponent={
                            <>
                                <MonthMusicalList data={filteredMusicalMonth}/>
                            </>
                        }
                    /> :<Text>null</Text>}
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MainScreen;