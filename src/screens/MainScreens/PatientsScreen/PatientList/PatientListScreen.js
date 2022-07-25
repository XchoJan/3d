import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import BlackHeader from "../../../../components/BlackHeader";
import {getUserDate} from "../../../../store/actions/user_data";
import {useDispatch, useSelector} from "react-redux";
import {dark_black} from "../../../../helpers/colors/colors";
import {Sizes} from "../../../../helpers/sizes/sizes";

const PatientListScreen = (props) => {
    const users = useSelector((store)=> store.user_data.users)
    const dispatch = useDispatch()

    function getUserNames() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                return res.json()
            }).then((res) => {
            dispatch(getUserDate(res))
        })
    }

    useEffect(() => {
        getUserNames()
    }, [])

    function handlePatientScreen(){
        props.navigation.navigate('Patients')
    }

    return (
        <View style={styles.container}>
            <View>
                <BlackHeader onPress={()=>{handlePatientScreen()}} input_placeholder={'Search patient'} info={'Patients list'} input>
                </BlackHeader>
            </View>
            <View style={styles.users}>
                <View>
                    {users?.map((user) =>
                        <View style={styles.user_box}>
                            <Text style={styles.user_name_letter}>
                                {user.username[0] && user.username[0]}
                            </Text>
                            <Text key={user.id} style={styles.user_name}>
                                {user.username}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

export default PatientListScreen;

const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    user_box: {

    },
    user_name_letter:{
        color: dark_black,
        backgroundColor: '#D1F2FA',
        paddingHorizontal: Sizes.size16,
        fontWeight: 'bold',
        fontSize: 17
    },
    user_name:{
        color: dark_black,
        textAlign: 'center',
        alignSelf: "flex-start",
        paddingHorizontal: Sizes.size16,
        marginVertical: 10,
        fontSize: 17

    }
})
