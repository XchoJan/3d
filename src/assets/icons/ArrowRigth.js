import React from 'react';
import {View} from "react-native";
import Svg, {Path} from "react-native-svg";

const ArrowRigth = (props) => {
    return (
        <View>
            <Svg
                width={7}
                height={12}
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M.97 12a.92.92 0 00.678-.276l5.01-4.962C6.89 6.536 7 6.292 7 6c0-.293-.109-.544-.335-.762L1.648.276A.92.92 0 00.97 0 .964.964 0 000 .962c0 .268.109.51.301.712l4.4 4.334-4.4 4.327A.964.964 0 00.971 12z"
                    fill="#C5C5C7"
                />
            </Svg>
        </View>
    );
};

export default ArrowRigth;
