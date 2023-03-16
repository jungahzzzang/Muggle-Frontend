import { useState } from "react";
import styled from "@emotion/native";
import { useQuery } from "react-query";
import { getMusicalData } from "../../utils/api";

export default function MusicalDetailScreen({
    navigation: { navigate },
    route: {
        params: { musicalId },
    },
}) {

    const {data: musicalData, isLoading: isLoadingMD} = useQuery(
        ['MusicalData', musicalId],
        getMusicalData
    );

    return (

        <Container>
            <TotalInfoPart>
                {musicalData?.dbs?.db?.map((musical) => (
                    <InfoPart key={musicalId}>
                        <ImgPart>
                            <BackImg
                                style={{resizeMode: 'stretch'}}
                                source={{
                                    uri: `${musical.poster}`,
                                }}
                            />
                        </ImgPart>
                        <TitlePart numberOfLines={4}>{musical.prfnm}</TitlePart>
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


