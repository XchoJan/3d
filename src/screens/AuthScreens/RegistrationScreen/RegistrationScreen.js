import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from "react-native";
import AuthScreen from "../../../components/AuthScreen";
import { dark_black, light_1, light_3 } from "../../../helpers/colors/colors";
import { Sizes } from "../../../helpers/sizes/sizes";
import BlueButton from "../../../components/BlueButton";

const RegistrationScreen = (props) => {
  const [passVisible, setPassVisible] = useState(true);
  const [passVisible1, setPassVisible1] = useState(true);

  const showPass = () => {
    setPassVisible(current => !current);
  };

  const showPass1 = () => {
    setPassVisible1(current => !current);
  };

  function handleRegistration(){
    props.navigation.navigate("ConfirmEmail")
  }

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <AuthScreen>
        <View>
          <Text style={styles.welcome_text}>
            Welcome
          </Text>
          <Text style={styles.sign_up_title}>
            Sign up with social media
          </Text>
        </View>
        <View>
          <BlueButton verticalMargin={14} google backgroundColor={"transparent"} color={dark_black}
                      borderColor={light_1}>
            Continue with Google
          </BlueButton>
          <BlueButton backgroundColor={"#1877F2"} facebook color={"white"} borderColor={light_1}>
            Continue with Facebook
          </BlueButton>
        </View>
        <View style={styles.or_box}>
          <Text style={styles.line} />
          <Text style={styles.or_text}>Or</Text>
          <Text style={styles.line} />
        </View>
        <View>
          <View style={styles.input_box}>
            <TextInput
              placeholder='First Name'
              placeholderTextColor={light_1}
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <TextInput
              placeholder='Last Name'
              placeholderTextColor={light_1}
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <TextInput
              placeholder='Email'
              placeholderTextColor={light_1}
              style={styles.input}
            />
          </View>
          <View style={[styles.input1, {marginTop: 5, flexDirection: "row", justifyContent: "space-between" }]}>
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
          <View style={[styles.input1, { flexDirection: "row", justifyContent: "space-between" }]}>
            <View>
              <TextInput
                style={styles.input_content}
                placeholderTextColor={light_3}
                placeholder="Confirm Password"
                secureTextEntry={passVisible1}
              />
            </View>
            <Pressable style={styles.show_btn_box} onPress={showPass1}>
              <Text style={styles.show_btn}>
                Show
              </Text>
            </Pressable>
          </View>
        </View>
        <BlueButton handlePressBtn={handleRegistration} verticalMargin={20} backgroundColor={light_1} color={'white'}>
          Sign up
        </BlueButton>
      </AuthScreen>
    </ScrollView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  welcome_text: {
    color: dark_black,
    fontSize: Sizes.size24,
    textAlign: "center",
  },
  sign_up_title: {
    fontSize: Sizes.size16,
    color: dark_black,
    textAlign: "center",
    marginBottom: Sizes.size15,
  },
  or_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  or_text: {
    color: dark_black,
    fontSize: Sizes.size18,
  },
  line: {
    width: Sizes.size146,
    backgroundColor: light_1,
    height: 2,
    top: 10,
  },
  input_box:{
    width: Sizes.size343,
    borderColor: light_1,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5
  },
  input:{

  },
  show_btn: {
    color: "#03397F",
  },
  show_btn_box: {
    top: 15,
    paddingRight: 15,
  },
  long_text: {
    color: dark_black,
  },
  input_content: {
    color: dark_black,
    width: Sizes.size280,
  },
  input1: {
    width: Sizes.size343,
    borderColor: light_1,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
});
