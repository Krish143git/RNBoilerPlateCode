import React from 'react';
import { } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/homeScreen';
import LoginScreen from '../../screens/loginScreen';
const BottomNavigator = () => {
    const BottomTab = createMaterialBottomTabNavigator()
    return (
        <>
            <NavigationContainer>
                <BottomTab.Navigator
                    initialRouteName="Home"
                    activeColor="#e91e63"
                    shifting={false}
                    barStyle={{ backgroundColor: '#32073d' }}>
                    <BottomTab.Screen
                        name="Home"
                        component={LoginScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarColor: '#cc6c43',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="home" color={color} size={26} />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Upcoming"
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'Upcoming',
                            tabBarColor: '#cc6c43',
                            tabBarIcon: ({ color }) => (
                                <Ionicons name="flash-outline" color={color} size={26} />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Hipi"
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'Feed',
                            tabBarColor: '#cc6c43',
                            tabBarIcon: ({ color }) => (
                                <Ionicons name="globe-outline" color={color} size={26} />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Downloads"
                        component={LoginScreen}
                        options={{
                            tabBarLabel: 'Downloads',
                            tabBarColor: '#cc6c43',
                            tabBarIcon: ({ color }) => (
                                <Feather name="download" color={color} size={26} />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="More"
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'More',
                            tabBarColor: '#cc6c43',
                            tabBarIcon: ({ color }) => (
                                <SimpleLineIcons name="menu" color={color} size={26} />
                            ),
                        }}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </>
    )
};
export default BottomNavigator;