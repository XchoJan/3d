import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Pressable, ScrollView} from "react-native";

import {Sizes} from "../../../helpers/sizes/sizes";
import AuthScreen from "../../../components/AuthScreen";
import {aqua_blue, dark_black, light_1, light_3} from "../../../helpers/colors/colors";
import BlueButton from "../../../components/BlueButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props) => {
    const [passVisible, setPassVisible] = useState(true);
    const [email, setEmail] = useState("");

    const showPass = () => {
        setPassVisible(current => !current);
    };

    function forgotPass() {
        props.navigation.navigate("ForgotPass");
    }

    function handleRegistration() {
        props.navigation.navigate("Registration");
    }

    async function handleLogin() {
        const is_logged = false
        await AsyncStorage.setItem('is_logged', !is_logged).then(r => console.log(r))
    }

    return (
        <ScrollView style={{backgroundColor: '#FFFFFF'}}>
            <AuthScreen>
                <View>
                    <View>
                        <Text style={styles.welcome_style}>Welcome</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Sign in with social media</Text>
                    </View>
                    <View>
                        <View>
                            <BlueButton google borderColor={light_1} backgroundColor={"transparent"} color={dark_black}>
                                Continue with Google
                            </BlueButton>
                        </View>
                        <View style={styles.button_margin}>
                            <BlueButton facebook backgroundColor={'#1877F2'}>
                                Continue with Facebook
                            </BlueButton>
                        </View>
                    </View>
                    <View style={styles.or_style}>
                        <Text style={styles.line}/>
                        <Text style={styles.or_text}>Or</Text>
                        <Text style={styles.line}/>
                    </View>
                    <View style={styles.input_container}>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.input_content}
                                placeholderTextColor={light_3}
                                placeholder="Email"/>
                        </View>
                        <View style={[styles.input, {flexDirection: "row", justifyContent: "space-between"}]}>
                            <View>
                                <TextInput
                                    style={styles.input_content}
                                    placeholderTextColor={light_3}
                                    placeholder="Password"
                                    secureTextEntry={passVisible}
                                />
                            </View>
                            <Pressable style={styles.show_btn_box} onPress={showPass}>
                                <Text style={styles.show_btn}>
                                    Show
                                </Text>
                            </Pressable>
                        </View>
                        <Pressable onPress={forgotPass}>
                            <Text>
                                <Text style={{color: "#03397F"}}>Forgot password?</Text>
                            </Text>
                        </Pressable>
                        <View>
                            <BlueButton handlePressBtn={handleLogin} verticalMargin={25} backgroundColor={light_1}>
                                Login
                            </BlueButton>
                            <View style={{flexDirection: "row", alignSelf: "center"}}>
                                <Text style={styles.long_text}>
                                    Don’t have an account ?
                                </Text>
                                <Pressable onPress={handleRegistration}>
                                    <Text style={styles.join_text}>
                                        Joins us now
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </AuthScreen>
        </ScrollView>

    );
};
export default LoginScreen;

const styles = StyleSheet.create({

    welcome_style: {
        textAlign: "center",
        fontSize: Sizes.size24,
        color: dark_black,
        marginBottom: 5,

    },
    title: {
        color: dark_black,
        marginBottom: 15,
        textAlign: "center",
    },
    button_margin: {
        marginTop: 15,
    },
    or_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Sizes.size20,
    },
    line: {
        backgroundColor: light_1,
        height: 2,
        width: Sizes.size146,
        top: 12,
    },
    or_text: {
        fontSize: 18,
        color: dark_black,
    },
    input: {
        width: Sizes.size343,
        borderColor: light_1,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 10,
    },
    input_container: {
        width: "100%",
    },
    show_btn: {
        color: "#03397F",
    },
    show_btn_box: {
        top: 15,
        paddingRight: 15,
    },
    long_text: {
        color: dark_black,
    },
    join_text: {
        color: aqua_blue,
        textDecorationLine: "underline",
    },
    input_content: {
        padding: 10,
        color: dark_black,
        width: Sizes.size280,
    },
});
