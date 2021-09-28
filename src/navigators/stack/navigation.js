import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
import HomeScreen from '../../screens/homeScreen';
import LoginScreen from '../../screens/loginScreen';

const Navigation = () =>{
    const stack = createNativeStackNavigator()
    return(
        <>
         <NavigationContainer>
            <stack.Navigator initialRouteName = 'Login'>
               <stack.Screen name = 'Login' component ={LoginScreen}/>
               <stack.Screen  name = 'home' component = {HomeScreen} />
            </stack.Navigator>
         </NavigationContainer>
        </>
    )
}
export default Navigation;