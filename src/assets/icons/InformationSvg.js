import React from 'react';
import {View} from "react-native";
import Svg, {Path} from "react-native-svg";

const InformationSvg = (props) => {
    return (
        <View>
            <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.875 12h-3.75a1.125 1.125 0 010-2.25h.75v-3H10.5a1.125 1.125 0 010-2.25H12c.621 0 1.125.504 1.125 1.125v4.125h.75a1.125 1.125 0 010 2.25z"
                    fill={props.fill ? props.fill : '#AEAEB2'}
                />
            </Svg>
        </View>
    );
};

export default InformationSvg;
