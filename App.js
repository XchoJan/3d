import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import LogOutNavigation from "./src/navigations/LogOutNavigation";

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <LogOutNavigation/>
    </NavigationContainer>
  );
};
export default App;
