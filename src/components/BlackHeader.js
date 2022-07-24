import React from 'react';
import {Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity} from "react-native";
import {dark_black} from "../helpers/colors/colors";
import ArrowLeft from "../assets/icons/ArrowLeft";
import PlusSvg from "../assets/icons/PlusSvg";
import {Sizes} from "../helpers/sizes/sizes";
import SearchSvg from "../assets/icons/SearchSvg";

const BlackHeader = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content_container}>
                <TouchableOpacity style={styles.first_item}>
                    <ArrowLeft/>
                    <Text style={[styles.title, {marginLeft: 5}]}>
                        Back
                    </Text>
                </TouchableOpacity>
                <Text style={styles.title}>{props.info}</Text>
                <Text>
                    <PlusSvg/>
                </Text>
            </View>
            {props.input && <View style={styles.input_box}>
                <View style={{marginTop: 10}}>
                    <SearchSvg/>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={props.input_placeholder}
                    />
                </View>
            </View>}
        </View>
    );
};

export default BlackHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: dark_black,
        width: '100%',

    },
    content_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Sizes.size55,
        paddingHorizontal: Sizes.size14,
        paddingBottom: Sizes.size19
    },
    first_item:{
        color: 'white',
        flexDirection: "row"
    },
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: "center",
        flexDirection: "row",
    },
    input_box: {
        paddingHorizontal: Sizes.size19,
        height: 36,
        backgroundColor: 'white',
        marginBottom: Sizes.size10,
        flexDirection: "row",
        marginHorizontal: Sizes.size11,
        borderRadius: 10
    },
    input: {}
})
