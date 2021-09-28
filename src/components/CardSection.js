import React from 'react';
import { View ,StyleSheet} from 'react-native';
//Card that displays data in row section
const CardSection = (props) => {
    const {container}=Styles
    return(
    <View style={[container,props.style]}>
      {props.children}
    </View>
);
}

export { CardSection } ;


const Styles=StyleSheet.create({
    container:{
        //padding:5,
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative',
        marginTop:15,
    }
})
