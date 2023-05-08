import { Dimensions } from 'react-native';
const parseString = require('react-native-xml2js').parseString;

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');
  
//날짜 가져오는 함수
export const getDateString = (type) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0'+(today.getMonth()+1)).slice(-2);
    const yesterday = today.getDate() -1;
    const day = ('0'+yesterday).slice(-2);

    return type === 'yesterday' ? `${year}${month}${day}` : `${year}${month}01`;
}

//xml to JSON
export const xmlToJson = (xmlData) => {
    const cString = xmlData.replace('\ufeff', '');
    let jsonData;

    parseString(cString, (err, result) => {
        if(err !== null) {
            console.log('error:', err);
            return;
        }
        jsonData = JSON.parse(JSON.stringify(result));
    });
    return jsonData;
};

//뮤지컬만 필터링
export const filterOnlyMusical = (data) =>
    data?.filter((perf) => perf.cate[0] === '뮤지컬');