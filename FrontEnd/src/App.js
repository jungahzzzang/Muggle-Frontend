import React, {useEffect} from "react";
import { StatusBar } from "react-native";
import {ThemeProvider} from "styled-components"
import { theme } from "./theme";
import Navigation from "./navigations/Index";

const App = () => {
    
    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content"/>
            <Navigation />
        </ThemeProvider>
    )
}

export default App;