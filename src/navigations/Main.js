import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from "react";
import HomeComponent from "../screens/MainScreens/HomeScreen/HomeScreen";
import InformationComponent from "../screens/MainScreens/InformationScreen/InformationScreen";
import PatientsComponent from "../screens/MainScreens/PatientsScreen/PatientsScreen";
import PractitionersComponent from "../screens/MainScreens/PractitionersScreen/PractitionersScreen";
import SettingsComponent from "../screens/MainScreens/SettingsScreen/SettingsScreen";
import SettingsThemeComponent from "../screens/MainScreens/SettingsScreen/SettingsThemeScreen/SettingsThemeScreen";
import SettingsMeasurementComponent from "../screens/MainScreens/SettingsScreen/SettingsMeasurementScreen/SettingsMeasurementScreen";
import PatientListComponent from "../screens/MainScreens/PatientsScreen/PatientList/PatientListScreen";
import MoreSvg from "../assets/icons/MoreSvg";
import PatientSvg from "../assets/icons/PatientSvg";
import InformationSvg from "../assets/icons/InformationSvg";
import PractitionersSvg from "../assets/icons/PractitionersSvg";
import SettingsSvg from "../assets/icons/SettingsSvg";
import {aqua_blue} from "../helpers/colors/colors";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen({navigation}) {
    return <HomeComponent navigation={navigation}/>;
}

function InformationScreen({navigation}) {
    return <InformationComponent navigation={navigation}/>;
}

function PatientsScreen({navigation}) {
    return <PatientsComponent navigation={navigation}/>;
}

function PractitionersScreen({navigation}) {
    return <PractitionersComponent navigation={navigation}/>;
}

function SettingsScreen({navigation}) {
    return <SettingsComponent navigation={navigation}/>;
}

function SettingsThemeScreen({navigation}) {
    return <SettingsThemeComponent navigation={navigation}/>;
}

function SettingsMeasurementScreen({navigation}) {
    return <SettingsMeasurementComponent navigation={navigation}/>;
}
function PatientListScreen({navigation}) {
    return <PatientListComponent navigation={navigation}/>;
}


export default function Main() {
    return (
        <Tab.Navigator
            initialRouteName="Patients"
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name="Home" component={HomeScreen}
                        options={{tabBarIcon: ({focused}) => (<MoreSvg/>),
                            tabBarActiveTintColor: aqua_blue}}/>

            <Tab.Screen name="Information" component={InformationScreen}
                        options={{tabBarIcon: ({focused}) => (<InformationSvg />),
                            tabBarActiveTintColor: aqua_blue}}/>

            <Tab.Screen name="Patients" component={PatientsScreen}
                        options={{tabBarIcon: ({focused}) => (<PatientSvg/>),
                            tabBarActiveTintColor: aqua_blue}}/>


            <Tab.Screen name="Settings" component={SettingsScreen}
                        options={{tabBarIcon: ({focused}) => (<SettingsSvg/>),
                            tabBarActiveTintColor: aqua_blue}}
            />

            <Tab.Screen name="Practitioners" component={PractitionersScreen}
                        options={{tabBarIcon: ({focused}) => (<PractitionersSvg/>),
                            tabBarActiveTintColor: aqua_blue
            }}/>

            <Tab.Screen name="SettingsTheme" component={SettingsThemeScreen}
                        options={() => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'}
                        })}/>

            <Tab.Screen name="SettingsMeasurement" component={SettingsMeasurementScreen}
                        options={() => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'}
                        })}/>

            <Tab.Screen name="PatientList" component={PatientListScreen}
                        options={() => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'}
                        })}/>

        </Tab.Navigator>
    );
}
