import React, {useEffect} from "react";
import { StatusBar } from "react-native";
import {ThemeProvider} from "styled-components"
import { theme } from "./theme";
import Navigation from "./navigations/Index";
import AuthStack from "./navigations/AuthStack";

const App = () => {
    
    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content"/>
                 <Navigation />
                 {/* <AuthStack /> */}
        </ThemeProvider>
    )
}

export default App;