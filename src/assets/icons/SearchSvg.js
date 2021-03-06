import React from 'react';
import {View} from "react-native";
import Svg, {Path} from "react-native-svg";

const SearchSvg = (props) => {
    return (
        <View>
            <Svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M6.383 12.767a6.382 6.382 0 003.71-1.196l3.935 3.935a.941.941 0 00.673.274c.54 0 .93-.415.93-.946a.914.914 0 00-.266-.665l-3.91-3.918a6.358 6.358 0 001.312-3.868C12.767 2.873 9.895 0 6.383 0 2.863 0 0 2.872 0 6.383c0 3.512 2.864 6.384 6.383 6.384zm0-1.378c-2.747 0-5.005-2.266-5.005-5.006 0-2.739 2.258-5.005 5.005-5.005 2.74 0 5.006 2.266 5.006 5.005 0 2.74-2.266 5.006-5.006 5.006z"
                    fill="#3C3C43"
                    fillOpacity={0.6}
                />
            </Svg>
        </View>
    );
};

export default SearchSvg;
