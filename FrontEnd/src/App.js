import React, {useEffect} from "react";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import {ThemeProvider} from "styled-components"
import { theme } from "./theme";
import Navigation from "./navigations/Index";
import AuthStack from "./navigations/AuthStack";

const queryClient = new QueryClient();

const App = () => {
    
    return (
        <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <StatusBar barStyle="dark-content"/>
                        {/* <Navigation /> */}
                        <AuthStack />
                </QueryClientProvider>
        </ThemeProvider>
    )
}

export default App;