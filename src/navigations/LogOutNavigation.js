import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ForgotPassComponent from "../screens/AuthScreens/ForgotScreen/ForgotPassScreen";
import ForgotCodeComponent from "../screens/AuthScreens/ForgotScreenCode/ForgotCode";
import LoginComponent from "../screens/AuthScreens/LoginScreen/LoginScreen";
import NewPasswordComponent from "../screens/AuthScreens/NewPasswordScreen/NewPasswordScreen"
import RegistrationComponent from "../screens/AuthScreens/RegistrationScreen/RegistrationScreen";
import ConfirmEmailComponent from "../screens/AuthScreens/ConfirmEmailScreen/ConfirmEmailScreen";
const Stack = createStackNavigator();


function LoginScreen({ navigation }) {
  return <LoginComponent navigation={navigation} />;
}

function ForgotPassScreen({ navigation }) {
  return <ForgotPassComponent navigation={navigation} />;
}

function ForgotCodeScreen({ navigation }) {
  return <ForgotCodeComponent navigation={navigation} />;
}

function NewPasswordScreen({ navigation }) {
  return <NewPasswordComponent navigation={navigation} />;
}

function RegistrationScreen({ navigation }) {
  return <RegistrationComponent navigation={navigation} />;
}
function ConfirmEmailScreen({ navigation }) {
  return <ConfirmEmailComponent navigation={navigation} />;
}

export default function LogOutNavigation() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="ForgotPass" component={ForgotPassScreen}/>

        <Stack.Screen name="ForgotCode" component={ForgotCodeScreen}/>

        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>

        <Stack.Screen name="Registration" component={RegistrationScreen}/>

        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>

      </Stack.Navigator>

  );
}
