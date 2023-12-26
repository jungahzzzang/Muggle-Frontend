import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useQuery } from "react-query";
import { FlatList } from "react-native";
import { getTheaterList } from "../../utils/api";
import { defaultFontText as Text } from "../../components/shared/Text";
import SearchBar from "../../components/shared/SearchBar";

const SeatListScreen = () => {

    const [theater, setTheater] = useState([]);
    useEffect(() => {
        getTheaterList();
    }, [])

    const {data, isLoading} = useQuery(['Theater'], getTheaterList);

    // const renderItem = useCallback(({item}) => )

    return (
        <>
            <SafeAreaView style={styles.container}>
                <SearchBar placeholder={"극장명, 뮤지컬 제목을 입력해 주세요."}/>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={theater}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default SeatListScreen;