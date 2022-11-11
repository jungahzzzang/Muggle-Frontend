import React from "react";
import { Text } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

// const StudyChat = ({navigation, route}) => {
//     useLayoutEffect(() => {
//         navigation.setOptions({headerTitle: route.params.title || 'Chat'});
//     }, []);
// }


const StudyChat = () => {
    return(
        <ScreenContainer>
            <Text style={{fontSize: 24}}>Study Chat</Text>
        </ScreenContainer>
    );
};

export default StudyChat;