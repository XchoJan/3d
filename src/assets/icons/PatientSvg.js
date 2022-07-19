import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from "react-native-svg";

const PatientSvg = (props) => {
    return (
        <View>
            <Svg
                width={20}
                height={23}
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M10 11.5c3.156 0 5.714-2.574 5.714-5.75C15.714 2.575 13.156 0 10 0 6.844 0 4.286 2.575 4.286 5.75c0 3.176 2.558 5.75 5.714 5.75zm2.263 2.157H7.737C3.465 13.657 0 17.143 0 21.442 0 22.302.693 23 1.547 23h16.907A1.55 1.55 0 0020 21.442c0-4.299-3.464-7.785-7.737-7.785z"
                    fill={props.fill ? props.fill : '#AEAEB2'}
                />
            </Svg>
        </View>
    );
};

export default PatientSvg;
