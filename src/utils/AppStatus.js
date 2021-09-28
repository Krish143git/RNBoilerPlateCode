import React, { useEffect } from 'react';
import { View,Text,AppState } from 'react-native';
const AppStatus = () =>{
     useEffect(() => {
         AppState.addEventListener('change',handleChange)
        console.log(AppState)
        
         return () => {
            AppState.removeEventListener('change', handleChange);
         }
     }, [])

     const handleChange = (ff) =>{
        //  console.log(ff)
         console.log(AppState.currentState)
     }
    return(
        <>
          <Text>hhhh</Text>
        </>
    )
}
export default AppStatus;