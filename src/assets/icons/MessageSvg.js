import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const MessageSvg = (props) => {
  return (
    <View>
      <Svg
        width={57}
        height={52}
        viewBox="0 0 57 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M48.333.667H5.667C2.733.667.333 3.067.333 6v32c0 2.933 2.4 5.333 5.334 5.333h24V38h-24V11.333L27 24.667l21.333-13.334v13.334h5.334V6c0-2.933-2.4-5.333-5.334-5.333zM27 19.333L5.667 6h42.666L27 19.333zM45.667 30l10.666 10.667-10.666 10.666v-8H35V38h10.667v-8z"
          fill={props.fill ? props.fill : '#AEAEB2'}
        />
      </Svg>
    </View>
  );
};

export default MessageSvg;
