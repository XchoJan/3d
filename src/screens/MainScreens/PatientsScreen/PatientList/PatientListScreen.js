import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import BlackHeader from "../../../../components/BlackHeader";

import {getUserDate} from "../../../../store/actions/user_data";
import {useDispatch, useSelector} from "react-redux";

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

    return (
        <View style={styles.container}>
            <View>
                <BlackHeader
                    input_placeholder={'Search patient'} info={'Patients list'} input>
                </BlackHeader>
            </View>
            <View style={styles.users}>
                <View>
                    {users.length && users.map((user) =>
                    <Text style={{color: 'red', textAlign: 'center'}}>
                        {user.name}
                    </Text>
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
    users: {

    }
})
