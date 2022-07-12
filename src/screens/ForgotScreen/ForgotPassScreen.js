import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import AuthScreen from "../../components/AuthScreen";
import { aqua_blue, dark_black, light_1 } from "../../helpers/colors/colors";
import { Sizes } from "../../helpers/sizes/sizes";
import BlueButton from "../../components/BlueButton";
import SignInBtn from "../../components/SignInBtn";

const ForgotPassScreen = (props) => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

  function handleSignIn() {
    props.navigation.navigate("Login");
  }

  function handlePressBtn() {
    props.navigation.navigate("ForgotCode");
  }

  return (
    <AuthScreen>
      <View style={{ flex: 5}}>
          <View>
            <Text style={styles.forgot_title}>Forgot your password?</Text>
            <Text style={styles.long_text}>
              Enter your email address and{"\n"}
              we will send you a code to reset your {"\n"} password.
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <View>
              <TextInput
                placeholderTextColor={light_1}
                style={styles.input_content}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.button_box}>
              <BlueButton
                disabled={!email ? disabled : null}
                borderColor="transparent"
                backgroundColor={email ? aqua_blue : light_1}
                handlePressBtn={handlePressBtn}
                verticalMargin={15}
              >
                Next
              </BlueButton>
            </View>
          </View>
        <View style={{flex: -2, marginBottom: 25 }}>
          <SignInBtn navigation={props.navigation} />
        </View>
      </View>
    </AuthScreen>
  );
};

export default ForgotPassScreen;

const styles = StyleSheet.create({
  forgot_title: {
    color: dark_black,
    fontSize: Sizes.size24,
    textAlign: "center",
    marginBottom: 15,
  },
  long_text: {
    textAlign: "center",
    width: Sizes.size343,
    color: dark_black,
    marginBottom: 15,

  },
  button_box: {},

  sign_in_box: {
    alignSelf: "center",
    flex: 1,
  },
  sign_in_title: {
    color: aqua_blue,
    textDecorationLine: "underline",
    fontSize: Sizes.size15,
  },
  input_content: {
    padding: 10,
    color: dark_black,
    width: Sizes.size340,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: light_1,
  },

});
