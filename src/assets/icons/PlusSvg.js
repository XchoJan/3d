import React from 'react';
import {View} from "react-native";
import Svg, {Path} from "react-native-svg";

const PlusSvg = (props) => {
    return (
        <View>
            <Svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path d="M14 6H8V0H6v6H0v2h6v6h2V8h6V6z" fill="#19BEE8" />
            </Svg>
        </View>
    );
};

export default PlusSvg;
