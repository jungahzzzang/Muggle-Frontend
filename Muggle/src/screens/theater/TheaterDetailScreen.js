import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import axios from "axios";
const cheerio = require('cheerio');
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { defaultFontText as Text } from "../../components/shared/Text";
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import { useNavigation } from "@react-navigation/native";
import NavigationHeader from "../../components/shared/NavigationHeader";
import { MUSICAL_SEAT_URL } from "../../utils/OAuth";

const generateSeat = () => {
    let numRow = 8;
    let numCol = 3;
    let rowArray = [];
    let start = 1;
    let atlast = false;
    for (let i = 0; i < numRow; i++) {
      let columnArray = [];
      for (let j = 0; j < numCol; j++) {
        let seatObj = {
          number: start,
          taken: Boolean(Math.round(Math.random())),
          selected: false,
        };
        columnArray.push(seatObj);
        start++;
      }
      if (i === 3) {
        numCol += 2;
      }
      if (numCol < 9 && !atlast) {
        numCol += 2;
      } else {
        (atlast = true), (numCol -= 2);
      }
      rowArray.push(columnArray);
    }
    return rowArray;
  };

const TheaterDetailScreen = ({route}) => {

    const navigation = useNavigation();

    const data = [];
    const [loading, setLoading] = useState(true);
    const [seatArray, setSeatArray] = useState([]);
    const [twoDSeatArry, setTwoDSeatArry] = useState(generateSeat());
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['50%'], []);

    const getHTML = async() => {
        try {
            return await axios.get(`${MUSICAL_SEAT_URL}/${route.params.musicalId}`);
        } catch (error) {
            console.log(error);
        }
    }
    
    const getSeatInfo = async () => {
        
        const html = await getHTML();
    
        const $ = cheerio.load(html.data);
    
        const firstWidth = $(".floor_container").children().eq(1).children().eq(0).children(); //가로
        const firstHeight = $(".floor_container").children().eq(0).find('.row'); //세로
        const $firstFloor = $(".floor_container").children().eq(1).find('.row');
    
        //const $secondFloor = $(".floor_container>div>.row>.seats");
    
        // for (var i=0; i<firstWidth.length; i++) {
        //     for (var j=0; j<firstHeight.length; j++) {
        //         firstRows[i][j] = firstWidth.
        //     }
        // }
    
        let numRow = firstHeight.length;
        let numCol = firstWidth.length;
        let rowArray = [];
        let atlast = false;
        let columnArray = [];
        for (let i = 0; i < numRow; i++) {
            let row = [];
            for (let j = 0; j < numCol; j++) {
                // if ($('.floor_container').children().eq(0).children(":eq("+j+")").find('p').text() != $('.floor_container').children().eq(0).children(":eq("+i+")").find('p').text()) {
                //     j = j+1;
                // }
            let seatObj = {
                number: $(".floor_container").children().eq(1).children(":eq("+j+")").children().eq(i).find('p').text(),
                selected: false,
            };
            //columnArray.push(seatObj);
            row.push(seatObj);
            console.log('==========rowr==========', row);
            }
            // if (numCol < numRow && !atlast) {
            // numCol += 2;
            // } else {
            // (atlast = true), (numCol -= 2);
            // }
            //rowArray.push(columnArray);
            rowArray.push(row);
            console.log('========rowArray=========', rowArray);
        }
        //return rowArray;

        setSeatArray(rowArray);
    
    
    
            //$(".floor_container").children().eq(1).eq(1);
    
            //if (number == "" || $(node).find('p').attr('class') == "seat_num") {
                //return;
            //}
    }

    const openReviewModal = (owIndex, seatIndex) => {
        bottomSheetModalRef.current?.present();
      };


    useEffect(() => {
        getSeatInfo();
    }, []);

    return (
        <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"좌석정보"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                              rightIcon rightIconName={"pencil-outline"} onPressRight={() => navigation.navigate("Write")}/>
            <ScrollView>
                    <View style={styles.seatContainer}>
                    <View> 
                        {seatArray.map((row, rowIndex) => {
                        return (
                            <View style={styles.seatRow} key={rowIndex}>
                                {row?.map((seat, seatIndex) => {
                                    return (
                                        <TouchableOpacity
                                            key={seatIndex}
                                            onPress={() => {
                                                openReviewModal(rowIndex, seatIndex, seat.number);
                                            }}
                                        >
                                            <View style={{ width: 20, height: 20, backgroundColor: 'orange', margin: 5 }}>
                                                <Text>{seat.number}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>     
                        )
                        })}
                    </View>   
                    </View>     
            </ScrollView>
        </SafeAreaView> 
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
        >
            <View>
                <Text>모달 테스트</Text>
            </View>
        </BottomSheetModal>
        </BottomSheetModalProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    context: {
        flex: 3,
        flexDirection: 'column'
    },
    uploadImg: {
        width: '100%',
        height: 360,
    },
    profileContainer: {
        padding: 8,
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderColor: '#cfcfcf',
    },
    titleArea: {
        padding: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#565759',
    },
    detailArea: {
        marginLeft: 15,
        marginRight: 15,
    },
    detailText: {
        fontSize: 18,
        color: 'gray',
        lineHeight: 15
    },
    priceArea: {
        flex: 4,
        justifyContent: 'center'
    },
    priceText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    chat: {
        height: '70%',
        width: '80%',
        backgroundColor: '#8879B0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
    },
    chatOut: {
        flex: 4,
        height: 50,
        justifyContent: 'center',
        alignItems : 'flex-end'
    },
    chatText: {
        color: 'white',
        fontSize: 15,
    },
    seatContainer: {
        gap: 20
    },
    containerGap20: {
        gap: 15
    },
    seatRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default TheaterDetailScreen;