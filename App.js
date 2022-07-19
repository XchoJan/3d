import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import LogOutNavigation from "./src/navigations/LogOutNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Main from "./src/navigations/Main";

const App = () => {
    let is_logged;
    is_logged = AsyncStorage?.getItem('is_logged')

    return (
        <NavigationContainer>
            {is_logged === true ?
                <LogOutNavigation/> : <Main/>}
        </NavigationContainer>
    );
};

export default App;


