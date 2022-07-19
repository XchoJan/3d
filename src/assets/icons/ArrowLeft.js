import React from 'react';
import {View} from "react-native";
import Svg, { Path } from "react-native-svg"

const ArrowLeft = (props) => {
    return (
        <View>
            <Svg
                width={12}
                height={22}
                viewBox="0 0 12 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M9.61 20.996c.257.258.585.399.972.399a1.38 1.38 0 001.395-1.383 1.42 1.42 0 00-.434-1.008L3.34 10.988l8.203-7.992c.27-.27.434-.633.434-1.008A1.38 1.38 0 0010.582.605c-.387 0-.715.141-.973.399L.492 9.91c-.328.305-.48.68-.492 1.09 0 .41.164.762.492 1.078l9.117 8.918z"
                    fill={props.color ? props.color : "#fff"}
                />
            </Svg>
        </View>
    );
};

export default ArrowLeft;
