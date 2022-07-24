import {View} from 'react-native';
import Svg, { Path } from "react-native-svg";
import React from "react";



const FbSvg = (props) => {
  return (
    <View>
      <Svg
        width={21}
        height={20}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M10.501.002C4.979.002.502 4.479.502 10.001c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V7.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988c4.781-.749 8.437-4.886 8.437-9.877 0-5.522-4.477-9.999-9.999-9.999z"
          fill="#fff"
        />
      </Svg>
    </View>

);
};


export default FbSvg;
