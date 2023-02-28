import { xmlToJson, getDateString } from "./util";
import { SERVICE_KEY } from "./OAuth";
import { kopisURL } from "./OAuth";

//상단 슬라이더
export const getMonthMusical = () =>
    fetch(
        `${kopisURL}/boxoffice?service=${SERVICE_KEY}&ststype=month&date=${getDateString()}&catecode=GGGA&area=11`
    )
        .then((res) => res.text())
        .then((data) => xmlToJson(data))
        .catch((error) => console.log(error));