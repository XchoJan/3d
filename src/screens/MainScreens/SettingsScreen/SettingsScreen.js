import React, {useState} from 'react';
import {Text, View, StyleSheet, Switch, Pressable} from "react-native";
import {Sizes} from "../../../helpers/sizes/sizes";
import {dark_black, light_1} from "../../../helpers/colors/colors";
import ArrowRigth from "../../../assets/icons/ArrowRigth";

const SettingsScreen = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.top_header}>
                <Text style={styles.settings_title}>Settings</Text>
            </View>
            <View style={styles.tinck__line}/>

            <View style={styles.bottom_content}>
                <Pressable style={styles.theme_box} onPress={()=>{props.navigation.navigate('SettingsTheme')}}>
                    <Text style={styles.theme_title}>Theme</Text>
                    <Text><ArrowRigth/></Text>
                </Pressable>
                <View style={{paddingLeft: 16}}>
                    <Text style={styles.line}/>
                </View>
                <View style={styles.theme_box}>
                    <Text style={styles.theme_title}>
                        Use default 3D model
                    </Text>
                    <Text>
                        <Switch
                            trackColor={{false: "#FFFFFF", true: "#34C759"}}
                            thumbColor={isEnabled1 ? "#FFFFFF" : light_1}
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </Text>
                </View>
                <View style={{paddingLeft: 16}}>
                    <Text style={styles.line}/>
                </View>
                <View style={styles.theme_box}>
                    <Text style={styles.theme_title}>Unit of measurement (CM)</Text>
                    <Text><ArrowRigth/></Text>
                </View>
                <View style={{paddingLeft: 16}}>
                    <Text style={styles.line}/>
                </View>
                <View style={styles.theme_box}>
                    <Text style={styles.theme_title}>
                        Use default 3D model
                    </Text>
                    <Text>
                        <Switch
                            trackColor={{false: "#FFFFFF", true: "#34C759"}}
                            thumbColor={isEnabled ? "#FFFFFF" : light_1}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </Text>
                </View>
                <View style={{paddingLeft: 16}}>
                    <Text style={styles.line}/>
                </View>
            </View>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top_header: {
        height: Sizes.size200,
        backgroundColor: dark_black
    },
    settings_title: {
        color: 'white',
        fontSize: Sizes.size34,
        top: 145,
        paddingHorizontal: Sizes.size16,
    },
    bottom_content: {
        flex: 1
    },
    theme_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Sizes.size16

    },
    theme_title: {
        color: dark_black
    },
    line: {
        width: '100%',
        backgroundColor: light_1,
        height: 1,
    },
    tinck__line: {
        height: Sizes.size32,
        backgroundColor: light_1
    }

})
