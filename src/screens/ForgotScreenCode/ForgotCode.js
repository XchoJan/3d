import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import AuthScreen from "../../components/AuthScreen";
import { aqua_blue, dark_black, light_1 } from "../../helpers/colors/colors";
import { Sizes } from "../../helpers/sizes/sizes";
import BlueButton from "../../components/BlueButton";
import SignInBtn from "../../components/SignInBtn";

const ForgotCode = (props) => {
  function handleNewPass(){
    props.navigation.navigate("NewPassword")
  }

  return (
    <AuthScreen>
      <View style={{ flex: 10,}}>
        <View style={styles.long_text_box}>
          <Text style={styles.long_text}>
            We have sent a code to your email, write it {"\n"} here
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="Type the code"
            placeholderTextColor={light_1}
            style={styles.input}
          />
        </View>
        <View style={{ marginBottom: 30 }}>
          <BlueButton
            backgroundColor={light_1}
            verticalMargin={15}
            handlePressBtn={handleNewPass}
          >
            Next
          </BlueButton>

          <BlueButton
            backgroundColor="transparent"
            borderColor={aqua_blue}
            color={"#000000"}
          >
            Send Reset Code
          </BlueButton>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <SignInBtn navigation={props.navigation} />
      </View>
    </AuthScreen>
  );
};

export default ForgotCode;
const styles = StyleSheet.create({
  long_text: {
    textAlign: "center",
    color: dark_black,
  },
  long_text_box: {
    marginVertical: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: Sizes.size340,
    borderColor: light_1,
  },
});
