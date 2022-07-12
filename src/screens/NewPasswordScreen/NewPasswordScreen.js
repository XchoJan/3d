import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import AuthScreen from "../../components/AuthScreen";
import { dark_black, light_1, light_3 } from "../../helpers/colors/colors";
import { Sizes } from "../../helpers/sizes/sizes";
import BlueButton from "../../components/BlueButton";

const NewPasswordScreen = () => {
  const [passVisible, setPassVisible] = useState(true);
  const [passVisible1, setPassVisible1] = useState(true);
  const showPass = () => {
    setPassVisible(current => !current);
  };
  const showPass1 = () => {
    setPassVisible1(current => !current);
  };

  return (
    <AuthScreen>
      <Text style={styles.new_pass_title}>
        Type new password
      </Text>

        <View style={[styles.input, styles.second_input_style]}>
          <View>
            <TextInput
              style={styles.input_content}
              placeholderTextColor={light_3}
              placeholder="Password"
              secureTextEntry={passVisible}
            />
          </View>
          <Pressable style={styles.show_btn_box} onPress={showPass}>
            <Text style={styles.show_btn}>
              Show
            </Text>
          </Pressable>
        </View>
      <View style={[styles.input, styles.second_input_style]}>
          <View>
            <TextInput
              style={styles.input_content}
              placeholderTextColor={light_3}
              placeholder="Password"
              secureTextEntry={passVisible1}
            />
          </View>
          <Pressable style={styles.show_btn_box} onPress={showPass1}>
            <Text style={styles.show_btn}>
              Show
            </Text>
          </Pressable>
        </View>
      <BlueButton backgroundColor={light_1} verticalMargin={Sizes.size20}>
        Sign In
      </BlueButton>
    </AuthScreen>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  new_pass_title: {
    color: dark_black,
    textAlign: "center",
    marginBottom: Sizes.size40
  },
  input_content: {
    padding: 10,
    color: dark_black,
    width: Sizes.size280,
  },
  show_btn: {
    color: "#03397F",
  },
  input: {
    width: Sizes.size343,
    borderColor: light_1,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  show_btn_box: {
    top: 15,
    paddingRight: 15,
  },
  second_input_style:{
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
