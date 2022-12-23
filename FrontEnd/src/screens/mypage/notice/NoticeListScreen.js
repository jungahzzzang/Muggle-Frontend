import React, {useState} from "react";
import { StyleSheet, View, LayoutAnimation, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { defaultFontText as Text } from "../../../components/Text";
import NavigationHeader from "../../../components/NavigationHeader";
import Icon from "react-native-vector-icons/Ionicons"
import { NoticeData } from "../../../assets/json/FlatData";

const [isOpen, setIsOpen] = useState(false);

const toggleOpen = useCallback(() => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, []);

class NoticeListScreen extends React.Component{
    render(){
      return(
        <View style={styles.container}>
          <SafeAreaView>
            <NavigationHeader title={"뮤글 공지사항"} />
              <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                  <FlatList
                      data={NoticeData}
                      keyExtractor={(item)=>item}
                      renderItem={({item}) => (
                        <TouchableOpacity onPress={toggleOpen}>
                          <View style={styles.notice}>
                              <Text style={styles.day}>{item.date}</Text>
                              <Text style={styles.title}>{item.title}</Text>
                              <Icon name={isOpen ? "chevron-up-outline" : "chevron-down-outline"} size={18} color="black" />
                          </View>
                        </TouchableOpacity>  
                      )}
                      />
                </View>
          </SafeAreaView>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    safeArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
        list: {
        borderBottomColor: "#EAEAEA",
        borderBottomWidth: 1,
    },
    hidden: {
        height: 0,
    },
    notice: {
        height: 70,
        alignItems: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
      },
    title: {
        textAlign: 'center',
        fontSize: 17,
        paddingBottom: 5,
      },
      day: {
        color: "#888"
      },
      new: {
        position: "absolute",
        top: 6,
        left: -16,
        width: 8,
        height: 8,
        backgroundColor: "#DB4455",
        borderRadius: 30
      },
});

export default NoticeListScreen;