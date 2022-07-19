
import React from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from "react-native";
import {aqua_blue, dark_black} from "../../../helpers/colors/colors";
import {Sizes} from "../../../helpers/sizes/sizes";
import BlueButton from "../../../components/BlueButton";

const HomeScreen = (props) => {
    return (
        <ScrollView style={{backgroundColor: dark_black, flex: 1}}>
            <View style={styles.container}>
                <View style={styles.min_wrapper}>
                    <View style={styles.title_wrapper}>
                        <Text style={styles.welcome_title}>
                            Welcome
                        </Text>
                        <Text style={styles.welcome_description}>
                            You must create a new patient {"\n"}
                            profile or choose an existing {"\n"}
                            one to start a new scan
                        </Text>
                    </View>
                    <View style={styles.patient_figure_wrapper}>
                        <View style={styles.patient_figure_box}>
                            <Image style={styles.patient_figure}
                                   source={require('../../../assets/images/figure.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.button_container}>
                        <BlueButton
                            backgroundColor={'white'}
                            color={aqua_blue}
                            fontSize={Sizes.size16}
                            verticalMargin={15}>
                            + New Patient
                        </BlueButton>
                        <BlueButton
                            backgroundColor={'transparent'}
                            borderColor={'white'}
                            fontSize={Sizes.size16}
                        >
                            Patient List
                        </BlueButton>
                    </View>
                </View>
            </View>
            <View style={{height: 50}}/>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: "center"

    },
    min_wrapper: {
        top: Sizes.size49,
    },
    title_wrapper: {},
    welcome_title: {
        color: 'white',
        fontSize: Sizes.size24,
        textAlign: "center",
        marginBottom: Sizes.size16
    },
    welcome_description: {
        color: 'white',
        textAlign: "center",
        fontSize: Sizes.size20,
    },
    patient_figure_wrapper: {
        alignSelf: "center",
        flex: 1,
        marginTop: Sizes.size24
    },
    patient_figure_box: {
        flex: 1
    },
    patient_figure: {
        width: Sizes.size196,
        height: Sizes.size398,
        resizeMode: "stretch"
    },
    button_container: {}
})
