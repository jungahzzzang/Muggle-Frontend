import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import {ThemeProvider} from "styled-components"
import { RecoilRoot } from "recoil";
import { theme } from "./theme";
import RootStack from "./navigations/RootStack";
import ModalWrapper from "./modal/ModalWrapper";

const queryClient = new QueryClient();

const App = () => {
    
    return (
        <RecoilRoot>
            <NativeBaseProvider>
                <NavigationContainer>
                    <ThemeProvider theme={theme}>
                        <QueryClientProvider client={queryClient}>
                            <StatusBar barStyle="dark-content"/>
                                <RootStack />
                        </QueryClientProvider>
                    </ThemeProvider>
                    <ModalWrapper />
                </NavigationContainer>
            </NativeBaseProvider>
        </RecoilRoot>
    )
}

export default App;