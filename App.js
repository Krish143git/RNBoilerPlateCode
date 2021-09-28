import React from 'react';
import {AppearanceProvider} from 'react-native-appearance';
import ThemeManager, { ThemeProvider } from './src/utils/themeManager';
import HomeScreen from './src/screens/homeScreen'
import LoginScreen from './src/screens/loginScreen';
import { Appearance, Button, Vibration, View } from 'react-native'
import Navigation from './src/navigators/stack/navigation';
import BottomTabs from './src/navigators/bottomtab/bottomTabs';
import AppStatus from './src/utils/AppStatus';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './src/navigators/drawer/DrawerContent';
import {} from 'react-redux'
import { Provider } from 'react-redux';
import  SplashScreen  from './src/screens/splashScreen';
import {store} from './src/redux/store/store'

const  App = () => {
 const Drawer = createDrawerNavigator()
 const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS
  ];

  return (
     //Bottom Tab + Theme Control + Basic Login
      <AppearanceProvider>
       <ThemeManager >
        <BottomTabs />
        </ThemeManager>
     </AppearanceProvider>

    //Drawer Navigation
    //    <NavigationContainer>
    //    <Drawer.Navigator  openByDefault = {true} overlayColor="red" 
    //     drawerContent ={props=> <DrawerContent {...props} />}>
    //   <Drawer.Screen name= 'Home' component={LoginScreen} />       
    //    </Drawer.Navigator>
    // </NavigationContainer>
  
  );
}

export default App;