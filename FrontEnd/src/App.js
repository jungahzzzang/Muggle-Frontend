import React, {useEffect} from "react";
import {StatusBar} from "react-native";
import {ThemeProvider} from "styled-components";
import SplashScreen from "react-native-splash-screen";
import {theme} from "./theme";
import Navigation from "./navigations/Index";


const App = () => {

    // const [isReady, setIsReady] = useState(false);
 
     // return isReady ? (
     //     <ThemeProvider theme={theme}>
     //         <StatusBar barStyle="dark-content"/>
     //         <Navigation />
     //     </ThemeProvider>
     // ) : (
     //     <ThemeProvider theme={theme}>
     //         <StatusBar barStyle="dark-content"/>
     //     </ThemeProvider>
     // );

     useEffect(() => {
        SplashScreen.hide();
     }, []);
 
 
     return (
         <ThemeProvider theme={theme}>
             <StatusBar barStyle="dark-content"/>
             <Navigation />
         </ThemeProvider>
     )
 };
 
 export default App;