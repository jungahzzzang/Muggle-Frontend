import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import {ThemeProvider} from "styled-components"
import { theme } from "./theme";
import RootStack from "./navigations/RootStack";

const queryClient = new QueryClient();

const App = () => {
    
    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <StatusBar barStyle="dark-content"/>
                        <RootStack />
                </QueryClientProvider>
            </ThemeProvider>
        </NavigationContainer>
    )
}

export default App;