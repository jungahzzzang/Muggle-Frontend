import React from "react";
import {StatusBar} from "react-native";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import Navigation from "./navigations/Index";
import { setCustomText } from "react-native-global-props";


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
 
 
     return (
         <ThemeProvider theme={theme}>
             <StatusBar barStyle="dark-content"/>
             <Navigation />
         </ThemeProvider>
     )
 };
 
 export default App;