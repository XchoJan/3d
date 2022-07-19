import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from "react-native";
import ArrowLeft from "../../../../assets/icons/ArrowLeft";
import {dark_black, light_1} from "../../../../helpers/colors/colors";
import {Sizes} from "../../../../helpers/sizes/sizes";

const SettingsThemeScreen = (props) => {
    const [theme, setTheme] = useState([1, 2, 3])
    const [theme2, setTheme2] = useState([1, 2])

    return (
        <View style={styles.container}>
            <View style={styles.min_wrapper}>
                <View style={styles.header}>
                    <View style={styles.back_content}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.arrow_paddings}><ArrowLeft/></Text>
                            <Text style={styles.back_title}>Back</Text>
                        </View>
                        <View style={styles.title_box}>
                            <Text style={styles.theme_title}>Select Theme</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.theme_box}>
                    <View style={styles.theme_content}>
                        <View style={styles.top_themes}>
                            {theme.map((item) =>
                                <Pressable key={theme[item]} style={styles.theme_item}>
                                    <View style={styles.round_item}/>
                                </Pressable>
                            )}
                        </View>
                        <View style={[styles.top_themes, {justifyContent: 'center'}]}>
                            {theme2.map((item) =>
                                <Pressable key={theme[item]} style={styles.theme_item}>
                                    <View style={styles.round_item}/>
                                </Pressable>
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SettingsThemeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    min_wrapper: {
        flex: 1
    },
    header: {
        height: Sizes.size88,
        backgroundColor: dark_black,
        flexDirection: "row"
    },
    back_content: {
        flexDirection: "row",
        top: 50,
        width: '100%',
    },
    arrow_paddings: {
        paddingHorizontal: 10,
    },
    back_title: {
        color: 'white',
        fontSize: Sizes.size18,
        bottom: 2
    },
    title_box: {
        left: '90%'
    },
    theme_title: {
        fontSize: Sizes.size18,
        color: 'white',
        textAlign: "center"
    },
    theme_box: {
        backgroundColor: '#F8F8F8',
        alignSelf: "center",
        top: Sizes.size32,

    },
    theme_content: {
        backgroundColor: '#fff',
        padding: Sizes.size24,
        borderRadius: 10
    },
    top_themes: {
        flexDirection: "row",
    },
    theme_item: {
        backgroundColor: '#F8F8F8',
        width: 93,
        height: 98,
        borderRadius: 10,
        borderColor: light_1,
        borderWidth: 2,
        justifyContent: "center",
        margin: Sizes.size8

    },
    round_item: {
        width: 40,
        height: 40,
        backgroundColor: '#B7E0F7',
        borderRadius: 100,
        left: 24
    }
})
