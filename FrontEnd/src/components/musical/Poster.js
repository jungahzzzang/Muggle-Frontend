import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { kopisImgURL } from "../../utils/OAuth";

const PosterWrapper = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
`

const PosterImg = styled.Image`
    // display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export default function Poster({url, musicalId}) {

    const { navigate } = useNavigation();
    
    return (
        <PosterWrapper
            onPress={()=>
                navigate('Stacks',{
                    screen:'MusicalDetail',
                    params: {musicalId: musicalId},
                })
            }
        >
            <PosterImg source={{uri: `${kopisImgURL}${url}`}} />
        </PosterWrapper>
    )
}