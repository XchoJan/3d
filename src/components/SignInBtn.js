import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { aqua_blue } from "../helpers/colors/colors";
import { Sizes } from "../helpers/sizes/sizes";

const SignInBtn = (props) => {
  function handleSignIn(){
   props.navigation.navigate("Login")
  }

  return (
    <Pressable style={styles.sign_in_box} onPress={handleSignIn}>
      <Text style={styles.sign_in_title}>
        Sign In
      </Text>
    </Pressable>
  );
};

export default SignInBtn;

const styles = StyleSheet.create({
  sign_in_box: {
    alignSelf: "center",
  },
  sign_in_title: {
    color: aqua_blue,
    textDecorationLine: "underline",
    fontSize: Sizes.size15,
  },
})
