import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { Sizes } from "../helpers/sizes/sizes";
import { light_1 } from "../helpers/colors/colors";

const AuthScreen = (props) => {
  const { children } = props;
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1}}>
      <View style={styles.container}>
        <View>
          <View style={styles.logo}>
            <Image style={styles.logo_img} source={require("../assets/images/logo.png")} />
          </View>
        </View>
      </View>
      <View style={styles.children_style}>
        {children}
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    width: "100%",
  },
  logo: {
    marginVertical: "15%",
    alignItems: "center",
  },
  logo_img: {
    borderWidth: 1,
    borderColor: light_1,
    borderRadius: 100,
    padding: 60
  },
  children_style: {
    alignSelf: "center",
    flex: 1
  },
});
