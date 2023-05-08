import React from "react";
import {View} from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import Poster from './Poster';

/**
 * 상단 슬라이더 리스트 아이템
 */

export default function MonthMusicalItem ({musical}) {

    const navigation = useNavigation();

    return (
        <ItemWrapper
            onPress={() =>navigation.navigate('MusicalDetail',{musicalId:musical?.mt20id[0]})}
        >
            <Poster url={musical?.poster || ""} musicalId={musical?.mt20id[0]} />
        </ItemWrapper>
    )
}

const ItemWrapper = styled.TouchableOpacity`
    width: 200px;
    height: 300px;
    margin: 70px auto 0;
`