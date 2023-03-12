import styled from "styled-components";
import MonthMusicalItem from "./MonthMusicalItem";
import Swiper from 'react-native-swiper';

export default function MonthMusicalList({data}) {
    
    return (
        <ListWrapper>
            <Swiper
                height='100%' showsPagination={false}
                horizontal
                loop
                autoplay
                autoplayTimeout={3.5}
                showsButtons={false}
            >
                {data?.map((item) => (
                    <MonthMusicalItem key={item?.mt20id} musical={item} />
                ))}
            </Swiper>
        </ListWrapper>
    )
}

const ListWrapper = styled.View`
    width: 100%;
    height: 400px;
    margin-bottom: 40px;
`;