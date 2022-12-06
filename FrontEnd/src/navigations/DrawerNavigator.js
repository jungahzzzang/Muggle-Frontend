import {createDrawerNavigator} from "react-navigation-drawer"
import MyPageListScreen from "../screens/mypage/MyPageListScreen";
//각 페이지
import FAQScreen from "../screens/mypage/FAQScreen";
import NoticeListScreen from "../screens/mypage/NoticeListScreen";
import PerrsonalInfoScreen from "../screens/mypage/PersonalInfoScreen";
import ProfileScreen from "../screens/mypage/ProfileScreen";
import TermsScreen from "../screens/mypage/TermsScreen";


const MyPageStack = createDrawerNavigator(
    
    {
        FAQScreen: {
            screen: FAQScreen,
        },
        NoticeListScreen : {
            screen: NoticeListScreen,
        },
        PerrsonalInfoScreen : {
            screen: PerrsonalInfoScreen,
        },
        ProfileScreen : {
            screen: ProfileScreen,
        },
        TermsScreen : {
            screen: TermsScreen,
        }
    },
    {
        //drawerWidth: Dimensions.get(`window`).width -150,
        contentComponent: props => <MyPageListScreen {...props} />
    }
)

export default MyPageStack;