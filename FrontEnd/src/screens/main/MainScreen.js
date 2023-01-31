import React from "react";
import { StyleSheet, View } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {SliderBox} from "react-native-image-slider-box";
import NavigationHeader from "../../components/NavigationHeader";
import { defaultFontText as Text } from "../../components/Text";

const images = [
    require("../../assets/banner/banner_sample1.png"),
    require("../../assets/banner/banner_sample2.png"),
    require("../../assets/banner/banner_sample3.png"),
];

class MainScreen extends React.Component {

    render(){
        return(
            <View style={styles.container}>
               <NavigationHeader title={"뮤글"} navigation={this.props.navigation}/>
               <SliderBox
                    images={images}
                    autoplay={true} //자동 슬라이더 넘김
                    circleLoop={true}   //맨끝 슬라이드에서 다시 첫 슬라이드로
                    //onCurrentImagePressed={index => alert(`image ${index} pressed`)}
                    ImageComponentStyle={{width: wp('100%'), height: hp('25%'), marginTop: 10}}    //이미지 Style 적용
                    resizeMode="cover"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MainScreen;