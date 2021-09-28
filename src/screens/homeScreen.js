import React,{useState} from 'react';
import { View,Text, Switch,StatusBar } from 'react-native'
import {ThemeContext} from './../utils/themeManager'
const HomeScreen =() =>{

   const {colors, isDark,setScheme} = React.useContext(ThemeContext)

   console.log(colors,isDark,setScheme)

   const toggleThemeColor = () =>{      
    isDark ? setScheme('light') : setScheme('dark');
   }

  return(
    <>
     <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"}/>
      <View style = {{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: colors.background}}>
        <Text style = {{color:colors.text}}>HomeScreen</Text>
        <Switch value={isDark} onValueChange ={toggleThemeColor}/>
     </View>
     </>
  ) 
}
export default HomeScreen;