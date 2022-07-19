import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet, TextInput, Pressable} from "react-native";
import {blue_dark, dark_black, light_1} from "../../../helpers/colors/colors";
import {Sizes} from "../../../helpers/sizes/sizes";
import BlueButton from "../../../components/BlueButton";

const PractitionersScreen = (props) => {
    const [gender, setGender] = useState({
        male: false,
        female: false,
        other: false
    })

    const [preferred, setPreferred] = useState({
        metric: false,
        us_standard: false
    })

    const handleSelectGender = (male, female, other) => {
        setGender({
            male,
            female,
            other
        })
    }

    const handleSelectPreferred = (metric, us_standard) => {
        setPreferred({
            metric,
            us_standard
        })
    }

    return (
        <ScrollView style={{backgroundColor: '#FFFFFF'}}>
            <View style={styles.container}>
                <View style={styles.title_box}>
                    <Text style={styles.title}>New Practitioners</Text>
                    <Text style={styles.line}/>
                </View>
                <View>
                    <View style={styles.general_title_box}>
                        <Text style={styles.general_title}>
                            General Information
                        </Text>
                    </View>
                    <View>
                        <View style={styles.input_box}>
                            <TextInput
                                placeholder={'First Name *'}
                                placeholderTextColor={light_1}
                            />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                placeholder={'Last Name *'}
                                placeholderTextColor={light_1}
                            />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                placeholder={'Practitioners ID'}
                                placeholderTextColor={light_1}
                            />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                placeholder={'Facility'}
                                placeholderTextColor={light_1}
                            />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                placeholder={'Email'}
                                placeholderTextColor={light_1}
                            />
                        </View>

                    </View>
                    <View>
                        <View style={styles.gender_title_box}>
                            <Text style={styles.gender_title}>Gender</Text>
                        </View>
                        <View style={styles.gender_select}>
                            <Pressable style={[styles.gender_select_item,
                                {borderTopLeftRadius: 20, borderBottomLeftRadius: 20,
                                    backgroundColor: gender.male ? blue_dark : 'white'}]}
                                       onPress={() => {handleSelectGender(true, false, false)}}>
                                <Text
                                    style={[styles.gender_title_select, {color: gender.male ? 'white' : dark_black}]}>Male</Text>
                            </Pressable>

                            <Pressable style={[styles.gender_select_item,
                                {backgroundColor: gender.female ? blue_dark : 'white'}]}
                                       onPress={() => {handleSelectGender(false, true, false)}}>
                                <Text
                                    style={[styles.gender_title_select, {color: gender.female ? 'white' : dark_black}]}>Female</Text>
                            </Pressable>

                            <Pressable style={[styles.gender_select_item,
                                {borderBottomRightRadius: 20, borderTopRightRadius: 20,
                                    backgroundColor: gender.other ? blue_dark : 'white'}]}
                                       onPress={() => {handleSelectGender(false, false, true)}}>
                                <Text
                                    style={[styles.gender_title_select, {color: gender.other ? 'white' : dark_black}]}>Other</Text>
                            </Pressable>
                        </View>
                        <View>
                            <View style={styles.preferred_select_title_box}>
                                <Text style={styles.preferred_select_title}>
                                    Preferred System of Units
                                </Text>
                            </View>

                            <View style={styles.preferred_select}>
                                <Pressable onPress={()=>{handleSelectPreferred(true, false)}}
                                    style={[styles.preferred_select_item,
                                        {borderTopLeftRadius: 20, borderBottomLeftRadius: 20,
                                         backgroundColor: preferred.metric ? blue_dark : 'white'
                                        }]}>
                                    <Text style={[styles.preferred_title, {color: preferred.metric ? 'white' : dark_black}]}>Metric</Text>
                                </Pressable>
                                <Pressable  onPress={()=>{handleSelectPreferred(false, true)}}
                                    style={[styles.preferred_select_item, {borderBottomRightRadius: 20, borderTopRightRadius: 20,
                                         backgroundColor: preferred.us_standard ? blue_dark : 'white'
                                    }]}>
                                    <Text style={[styles.preferred_title, {color: preferred.us_standard ? 'white' : dark_black}]}>US Standard </Text>
                                </Pressable>
                            </View>
                            <View style={styles.bottom_line}/>
                            <View>
                                <BlueButton
                                backgroundColor={light_1}
                                fontSize={18}
                                >
                                    Next
                                </BlueButton>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{height: 25}}/>
        </ScrollView>
    );
};

export default PractitionersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Sizes.size150,
        paddingHorizontal: Sizes.size16,

    },
    title_box: {
        marginBottom: 30,
        alignSelf: "center",
    },
    title: {
        color: dark_black,
        fontSize: Sizes.size24,

    },
    line: {
        height: 3,
        backgroundColor: blue_dark
    },
    general_title_box: {
        marginBottom: Sizes.size16
    },
    general_title: {
        color: dark_black,
        fontSize: Sizes.size18
    },
    input_box: {
        borderColor: light_1,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10
    },
    gender_title_box: {
        marginTop: Sizes.size25,
        marginBottom: Sizes.size10,
    },
    gender_title: {
        color: dark_black,
        fontSize: Sizes.size16
    },
    gender_select: {
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    gender_title_select: {
        color: dark_black,
        textAlign: 'center',
        top: 10,
        fontWeight: "bold"
    },
    gender_select_item: {
        width: '30%',
        height: 45,
    },
    preferred_select_title_box:{
      marginTop: 15,
    },
    preferred_select_title:{
        color: dark_black,
        fontSize: Sizes.size18,
    },
    preferred_select:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginTop: 15,
        borderRadius: 20

    },
    preferred_title:{
        top: 13,
        color: dark_black,
        textAlign: "center",
        fontWeight: "bold"

    },
    preferred_select_item:{
        width: '50%',
        height: 45,
    },
    bottom_line:{
        height: 2,
        backgroundColor: light_1,
        marginTop: Sizes.size32,
        marginBottom: Sizes.size24,

    }
})
