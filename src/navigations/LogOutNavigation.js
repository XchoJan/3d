import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ForgotPassComponent from "../screens/ForgotScreen/ForgotPassScreen";
import ForgotCodeComponent from "../screens/ForgotScreenCode/ForgotCode";
import LoginComponent from "../screens/LoginScreen/LoginScreen";
import NewPasswordComponent from "../screens/NewPasswordScreen/NewPasswordScreen"
import RegistrationComponent from "../screens/RegistrationScreen/RegistrationScreen";
import ConfirmEmailComponent from "../screens/ConfirmEmailScreen/ConfirmEmailScreen";
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
