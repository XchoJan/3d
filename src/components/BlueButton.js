import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Sizes } from "../helpers/sizes/sizes";
import { blue_dark, } from "../helpers/colors/colors";
import GoogleSvg from "../assets/icons/GoogleSvg";
import FbSvg from "../assets/icons/FbSvg";

const BlueButton = (props) => {
  const { children } = props;

  return (
    <TouchableOpacity
      onPress={props.handlePressBtn}
      disabled={props.disabled}
      style={[styles.button,
        {
          backgroundColor: props.backgroundColor ? props.backgroundColor : blue_dark,
          borderColor: props.borderColor ? props.borderColor : "transparent",
          marginVertical: props.verticalMargin,
          width: props?.width
        },
      ]}>
      <View style={styles.button_box}>
        <Text style={{marginRight: 10}}>
          {props.google ?
            <GoogleSvg/> :
              props.facebook  ? <FbSvg/> : null
          }

        </Text>
        <Text style={[styles.button_title,
          { color: props.color ? props.color : "white",
            fontSize: props?.fontSize,
            fontWeight: props.fontWeight,
            width: props.width

          }]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BlueButton;

const styles = StyleSheet.create({
  button: {
    width: Sizes.size343,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: blue_dark,
    borderColor: "transparent",

  },

  button_title: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  button_box:{
    flexDirection: "row",
    justifyContent: 'center'
  }
});
