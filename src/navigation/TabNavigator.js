import React from 'react'
import {View, Stylesheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ScannerScreen from '../screens/ScannerScreen';
import TabBar from '../components/TabBar';
import MainScreen from "../screens/MainScreen";

const Tab = createBottomTabNavigator();

const TabNvigator = () => {
    return <Tab.Navigator tabBar={(props) => <TabBar {...props}/>}>
        <Tab.Screen name='Main' component={MainScreen} />
        <Tab.Screen name='Profile' component={ScannerScreen} />
        <Tab.Screen name='Training' component={ScannerScreen} />
        <Tab.Screen name='Map' component={ScannerScreen} />
        <Tab.Screen name='Settings' component={ScannerScreen} />
    </Tab.Navigator>
}

export default TabNvigator;
