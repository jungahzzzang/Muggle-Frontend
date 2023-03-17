import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "@emotion/native";
import { useQuery } from "react-query";
import { getMusicalData } from "../../utils/api";
import { defaultFontText as Text } from "../../components/Text";
import NavigationHeader from "../../components/NavigationHeader";

export default function MusicalDetailScreen({
    
    navigation: { navigate },
    route: {
        params: { musicalId },
    },
}) {

    const navigation = useNavigation();

    const {data: musicalData, isLoading: isLoadingMD} = useQuery(
        ['MusicalData', musicalId],
        getMusicalData
    );

    return (

        <Container>
            <TotalInfoPart>
                <NavigationHeader title={"뮤지컬 정보"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}/>
                {musicalData?.dbs?.db?.map((musical) => (
                    <InfoPart key={musicalId}>
                        {/* 포스터 이미지 */}
                        <ImgPart>
                            <BackImg
                                style={{resizeMode: 'stretch'}}
                                source={{
                                    uri: `${musical.poster}`,
                                }}
                            />
                        </ImgPart>
                        <TitlePart numberOfLines={4}>{musical.prfnm}</TitlePart>
                        {/* 정보 */}
                        <MusicalInfo>
                            <Info>출연 : {musical.prfcast ?? '정보없음'}</Info>
                            <Info>제작 : {musical.prfcrew ?? '정보없음'}</Info>
                            <Info>
                                공연 기간 : {musical?.prfpdfrom} ~ {musical.prfpdto}
                            </Info>
                            <Info>공연 장소 : {musical.fcltynm ?? '정보 없음'}</Info>
                            <Info>러닝타임 : {musical.prfruntime ?? '정보 없음'}</Info>
                            <Info>관람 연령가 : {musical.prfage ?? '정보 없음'}</Info>
                        </MusicalInfo>
                    </InfoPart>
                ))}
            </TotalInfoPart>
        </Container>
    )
}

const Container = styled.ScrollView`
    flex: 1;
`;

const TotalInfoPart = styled.View`
    flex: 1;
`;

const InfoPart =styled.View`
    height: auto;
    margin-bottom: 30px;
`;

const ImgPart = styled.View`
    width: 100%;
    height: 460px;
    margin-bottom: 30px;
`;

const BackImg = styled.Image`
    flex: 1;
`;

const TitlePart = styled.Text`
    font-size: 30px;
    font-weight: 600;
    margin-left: 20px;
    margin-bottom: 10px;
    padding-right: 10px;
`;

const MusicalInfo = styled.View`
    padding: 10px 20px;
`;

const Info = styled.Text`
    font-size: 16px;
    padding-bottom: 10px;
`;


