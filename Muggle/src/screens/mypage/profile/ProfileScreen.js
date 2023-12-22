import React from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { defaultFontText as Text } from "../../../components/shared/Text";
import NavigationHeader from "../../../components/shared/NavigationHeader";
import FlatListItem from '../../../components/shared/FlatListItem';
import Routes from "../../../navigations/Routes";
import { MyPageListData } from "../../../assets/json/FlatData";
import { useLogoutModal, useUnRegisterCheckModal } from "../../../modal/useModal";
import { set } from "react-native-reanimated";

const ProfileScreen = () => {

    const navigation = useNavigation();
    const {openModal: openLogoutModal} = useLogoutModal();
    const {openModal : openUnRegisterCheckModal} = useUnRegisterCheckModal();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader title={"마이페이지"} leftIcon leftIconName={"chevron-back-outline"} onPressLeft={() => navigation.goBack()}
                              rightIcon rightIconName={"settings-outline"} onPressRight={()=>navigation.navigate('MyPage')}
            />
            <FlatListItem
                title={MyPageListData[0].title}
                onPress={() => navigation.navigate(Routes.Profile)}
            />
            <FlatListItem
                title={MyPageListData[1].title}
                onPress={() => navigation.navigate(Routes.NoticeList)}
            />
            <FlatListItem
                title={MyPageListData[3].title}
                onPress={() => navigation.navigate(Routes.FAQ)}
            />
            <FlatListItem
                title={MyPageListData[4].title}
                onPress={() => navigation.navigate(Routes.PersonalInfo)}
            />
            <FlatListItem
                title={MyPageListData[5].title}
                onPress={() => navigation.navigate(Routes.Terms)}
            />
            <FlatListItem
                title={MyPageListData[6].title}
                onPress={openLogoutModal}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default ProfileScreen;