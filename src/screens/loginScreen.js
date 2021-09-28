
import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { CardSection } from '../components/CardSection'
import { CustomButton } from '../components/CustomButton'
import { Input } from '../components/input'
import { getShowsData } from '../services/apiCall'
import { widthPercentageToDP as wp } from './../utils/responsiveDimensions'
import show from './../utils/Show'

const LoginScreen = () => {

  let cred = {
    username: '',
    password: '',
    error: 0,
    errmsg: '',
    errpass: 0,
  }


  const [data, setData] = useState(cred)


  const updateValue = (text, field) => {
    const emailreg = /^[a-zA-Z0-9](\.?[a-zA-Z0-9_-]){0,}@[a-zA-Z0-9-]+\.([a-zA-Z]{1,6}\.)?[a-zA-Z]{2,6}$/;
    const passreg = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%.]).{9,20})/;

    if (field == 'username') {
      console.log('userName')
      if (emailreg.test(text)) {
        console.log('testCasePassedusername')
        setData({ ...data, username: text, error: 0, errmsg: '' })
      }
      else {
        console.log('testCaseFailedusername')
        setData({ ...data, username: text, errmsg: 'Enter valid email address !', error: 1 })
      }
      console.log('username Validation done')
    }

    else if (field == 'password') {
      console.log('password')
      if (passreg.test(text)) {
        console.log('testCasePassedPassword')
        setData({
          ...data,
          password: text,
          errorpass: 0,
          errmsg: ''
        })
      }
      else {
        console.log('testCasefailedPassword')
        setData({ ...data, password: text, errmsg: 'Enter Minimum eight characters, at least one letter and one number !', errorpass: 1, })
      }
      console.log('Password Validation done')

    }


  }


  const onsubmit = () => {
    console.log('OnSubmit')

    if (data.password == '' && data.username == '') {
      show('Invalid credentials', 'Please enter details');
    }
    else if (data.error == 0 && data.username != '') {  //Check if email is entered
      if (data.password == '') {     //password is null
        show('Empty password', 'Please enter password');
      }
      else if (data.errorpass == 0 && data.password != '') {
        succussfullLogin()
      }
      else {
        show('Invalid password', 'Enter valid Password!');
      }
    }
    else {
      show('Invalid email', 'Enter valid email address / Username !');
    }

  }

  const succussfullLogin = async () => {
    const value = await getShowsData()
    console.log(value)

  }
  [1,2,3].map(({index,value})=>{
    return 
  })

  return (
    <>
      <KeyboardAvoidingView style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }} behavior="padding" enabled>

        <Text style={{ fontSize: wp('5%'), marginTop: 10,color:'white',fontWeight:'bold' }}>LOGIN</Text>

        <CardSection style={{
          backgroundColor: 'white',
          borderRadius: 50,
          marginTop: 50,
          margin: 15
        }}>
          <Input
            iconLabel="mail"
            placeholder="abcd@gmail.com"
            onChangeText={(text) => updateValue(text, 'username')}
          />
        </CardSection>
        <CardSection style={{
          backgroundColor: 'white',
          borderRadius: 50,
          margin: 15
        }}>
          <Input
            iconLabel="lock"
            placeholder="********"
            onChangeText={(text) => updateValue(text, 'password')}
            secureTextEntry={true}
          />
          {console.log(data)}
        </CardSection>
        <CardSection style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <CustomButton onPress={onsubmit}>Submit</CustomButton>
        </CardSection>

      </KeyboardAvoidingView>
    </>
  )
}


export default LoginScreen;



