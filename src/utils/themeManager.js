import React from 'react';
import {useColorScheme} from 'react-native-appearance';
import {darkColors,lightColors} from './../constants/colors/themeColors'

export const ThemeContext = React.createContext({
    isDark: false,
    colors: 'dar',
    setScheme: () => {},})

 const ThemeManager = ({children}) =>{

    const colorScheme = useColorScheme(); 

    const [isDark, setIsDark] = React.useState(colorScheme === "dark");

    React.useEffect(() => {
        setIsDark(colorScheme === "dark");
    }, [colorScheme]);

    const defaultTheme = {
        isDark,
        colors: isDark ? darkColors : lightColors, 
        setScheme: (scheme) => setIsDark(scheme === "dark"),
    };

    return(
        <ThemeContext.Provider value ={defaultTheme} >
             {children}
        </ThemeContext.Provider>
    )

}
export default ThemeManager;

