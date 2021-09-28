import React from 'react'
import { View,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp} from './../utils/responsiveDimensions'


const Input = (props) => {
    const {iconLabel,placeholder,value,onChangeText,secureTextEntry} = props
    const {textInputStyle,containerStyle}  = styles
    return (
       <>
          <View style={{ justifyContent:'center', flex:1, alignItems:'flex-end' }}>
              <Icon 
                 style={{ color: 'black' }}
                 name={iconLabel}
                 size={wp('7%')}
              />
          </View>
            <View style = {{...containerStyle}} > 
            <View style={{flex:iconLabel=='lock'?3:1}}>
                <TextInput
                  placeholder = {placeholder} 
                  value = {value} 
                  onChangeText = {onChangeText}
                  secureTextEntry = {secureTextEntry}
                  style = {[{...textInputStyle}]}           
                />
            </View>    
            </View> 
       </>
    )
}

const styles = {
    textInputStyle : {
        width: '97%',
        height:50,
        color:'black',
        marginLeft: 8,
        fontSize: wp('4.8%'),
        fontWeight:'bold'
         
        
    },
    containerStyle: {
        flex: 7,
        justifyContent: 'center',
        alignContent: 'center',
        // backgroundColor:'red',
        flexDirection:'row'
    }
}


export  {Input};