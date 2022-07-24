import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import LogOutNavigation from "./src/navigations/LogOutNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Main from "./src/navigations/Main";
import { store } from './src/store/index'
import {Provider} from 'react-redux'

// import store from './store'

const App = () => {
    let is_logged;
    is_logged = AsyncStorage?.getItem('is_logged')

    return (
        <Provider store={store}>
            <NavigationContainer>
                {!is_logged ?
                    <LogOutNavigation/> : <Main/>}
            </NavigationContainer>
        </Provider>
    );
};

export default App;


