import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import AuthScreen from "../../components/AuthScreen";
import { aqua_blue, blue_dark, dark_black, light_1 } from "../../helpers/colors/colors";
import { Sizes } from "../../helpers/sizes/sizes";
import MessageSvg from "../../assets/icons/MessageSvg";
import BlueButton from "../../components/BlueButton";

const ConfirmEmailScreen = (props) => {
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <ScrollView style={{ paddingBottom: 25 }}>
        <AuthScreen>
          <View>
            <Text style={styles.welcome_title}>
              Welcome
            </Text>
          </View>
          <View style={styles.content_box}>
            <View style={{}}>
              <View style={styles.icon_box}>
                <MessageSvg />
              </View>
              <Text style={styles.box_title}>
                Please confim your e-mail address
              </Text>
              <Text style={styles.box_text}>
                We sent a confirmation code to {"\n"} someone@gmail.com{"\n"}
                address, please check it and type the {"\n"} code
              </Text>
              <View style={{}}>
                <View style={styles.input_box}>
                  <TextInput
                    style={styles.input}
                    placeholder={"Type the code"}
                    placeholderTextColor={light_1}
                  />
                </View>
                <View style={styles.button_box}>
                  <BlueButton
                    verticalMargin={20}
                    borderColor={aqua_blue}
                    backgroundColor={"transparent"}
                    color={dark_black}
                    fontWeight={"bold"}
                    fontSize={Sizes.size18}
                    width={Sizes.size311}
                  >
                    Resent code
                  </BlueButton>
                </View>
              </View>
            </View>
          </View>
        </AuthScreen>
        <View style={{ height: 25 }} />

      </ScrollView>
    </View>

  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
  welcome_title: {
    color: dark_black,
    fontSize: Sizes.size24,
    textAlign: "center",
  },
  content_box: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: Sizes.size25,
    width: Sizes.size347,
    shadowColor: `rgba(42, 35, 108, 0.15)`,
    shadowOffset: {
      width: 0,
      height: 2,
      borderRadius: 20,

    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,

    elevation: 8,
  },
  icon_box: {
    alignSelf: "center",
    marginVertical: 35,
  },
  box_title: {
    color: dark_black,
    fontSize: 16,
    textAlign: "center",
  },
  input_box: {
    borderRadius: 5,
    borderColor: light_1,
    borderWidth: 1,
    width: Sizes.size311,
    alignSelf: "center",
  },
  box_text: {
    color: dark_black,
    fontSize: 12,
    textAlign: "center",
    marginBottom: 15,
  },
  input: {},
  button_box: {
    width: Sizes.size311,
    alignSelf: "center",
    marginBottom: 25,
  },
});
