import React from 'react'
import { Button } from 'react-native'
import { connect, useSelector } from 'react-redux'
import { store } from '../redux/store/store'

 const SplashScreen = (props) => {
 
    return (
      <>
      {/* <Button title = 'hero' onPress = {()=>{store.dispatch({type: 'USER_FETCH_REQUESTED'})}}/> */}
      </>
    )
}

const mapStateToProps = (state) => {
   return {'data':state}

}
export default SplashScreen
