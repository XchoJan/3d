import React from 'react';
import {View} from "react-native";
import Svg, {Path} from "react-native-svg";

const MoreSvg = (props) => {
    return (
        <View>
            <Svg
                width={22}
                height={6}
                viewBox="0 0 22 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M5.893 3c0 1.448-1.231 2.625-2.75 2.625S.393 4.448.393 3 1.624.375 3.143.375 5.893 1.552 5.893 3zm7.857 0c0 1.448-1.233 2.625-2.75 2.625S8.25 4.448 8.25 3 9.483.375 11 .375 13.75 1.552 13.75 3zm2.357 0c0-1.448 1.233-2.625 2.75-2.625 1.518 0 2.75 1.177 2.75 2.625s-1.232 2.625-2.75 2.625c-1.517 0-2.75-1.177-2.75-2.625z"
                    fill={props.color ? props.color : '#AEAEB2'}
                />
            </Svg>
        </View>
    );
};

export default MoreSvg;
