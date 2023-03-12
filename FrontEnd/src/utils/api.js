import { xmlToJson, getDateString } from "./util";
import { SERVICE_KEY } from "./OAuth";
import { kopisURL } from "./OAuth";

// 상단 슬라이더
export const getMonthMusical = () =>
    fetch(
        `${kopisURL}/boxoffice?service=${SERVICE_KEY}&ststype=month&date=${getDateString()}&catecode=GGGA&area=11`
    )
        .then((res) => res.text())
        .then((data) => xmlToJson(data))
        .catch((error) => console.log(error));

// 뮤지컬 상세 정보
export const getMusicalData = (params) => {
    const [_, musicalId] = params.queryKey;
    return fetch(`${kopisURL}/pblprfr/${musicalId}?service=${SERVICE_KEY}`)
        .then((res) => res.text())
        .then((data) => xmlToJson(data))
        .catch((error) => console.log(error));
}