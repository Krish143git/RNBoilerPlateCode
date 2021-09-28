import React from 'react';
import { Text,TouchableOpacity,StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from './../utils/responsiveDimensions';
//Custom button to display button with different colrs, height width wherever required
const CustomButton = ({onPress,children,props}) => {
    const {buttonStyle,textStyle}=Styles
    
    return(
        <TouchableOpacity style={[buttonStyle, {height:hp('6%'), width:wp('50%')}]} onPress={onPress} >
                <Text style={textStyle}>
                   {children}
                </Text>
        </TouchableOpacity>
    
);
}
const Styles=StyleSheet.create({
    buttonStyle:{
        marginTop:10,
        backgroundColor:'#ee5f35',
        borderColor:'#f05422',
        borderWidth:1,
        borderRadius:50,
        justifyContent:'center',
        },
        textStyle:{
            //alignSelf:'center',
            fontSize:wp('5%'),
            color:'#ffffff',
            fontWeight:'600',
            //paddingTop:5,
            textAlign:'center'
             
        }
})
export { CustomButton };
