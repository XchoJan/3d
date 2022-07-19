import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import {dark_black} from "../../../helpers/colors/colors";
import {Sizes} from "../../../helpers/sizes/sizes";

const InformationScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.information_title}>Information</Text>
            </View>
            <Text style={styles.information_text}>3D Scan Procare is a Canadian company using the newest scanning
                technology to get your new orthotics fitted correctly, Where an innovative technology is used in
                conjunction with your iPhone to scan your patients’ feet with remarkable accuracy.
                Feet can be scanned in weight-bearing and non-weight-bearing. For complicated issues, our podiatrist
                recommends specific changes to your orthotic to ensure that it is optimal for you.</Text>
        </View>
    );
};
export default InformationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        height: Sizes.size88,
        backgroundColor: dark_black,
        flexDirection: "row",
        width: '100%'
    },
    information_title: {
        color: '#FFFFFF',
        fontSize: Sizes.size18,
        alignSelf: "center",
        textAlign: "center",
        width: '100%',
        top: 15
    },
    information_text: {
        color: dark_black,
        textAlign: "center",
        lineHeight: 22,
        top: Sizes.size16,
        fontWeight: "bold",
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '70%',
        paddingHorizontal: 15
    }

})
