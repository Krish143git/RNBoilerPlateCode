import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
const DrawerContent = (props) => {
    console.log(props.navigation)

    const iconNames = ['home','archive','bookmark','archive','bookmark'] 

    const CapturePhoto = () => {
        // props.TakePhoto()
    }

    return (
        <>

            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 40 }}>
                            <View style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: 'black', justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 110, height: 110, borderRadius: 55 }} />
                            </View>
                            <TouchableOpacity onPress={CapturePhoto}>
                                < MaterialCommunityIcons name="camera-outline" color='black' size={50} />
                            </TouchableOpacity>

                        </View>
                        <View >
                            <Text style={styles.header}>React-Native</Text>
                            <Text style={styles.subheader}>View Profile</Text>
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 2, backgroundColor: 'grey', marginTop: 20 }}></View>
                    {
                        ['Home', 'Info', 'Settings', 'Help', 'Logout'].map((index, value) => {
                            return (
                                <>
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <View style={{width:40,height:40,borderRadius:20,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
                                            < Fontisto name = {iconNames[value]} color={'orange'} size={23} />
                                              </View>

                                        )}
                                        label={index}
                                        inactiveTintColor='#ffffff'
                                        activeTintColor='#00a9d6'
                                        labelStyle={{ fontSize: 25, color: 'black' }}
                                        onPress={() => props.navigation.navigate('Home')}
                                    />

                                </>
                            )
                        })
                    }
                </DrawerContentScrollView>

            </View>
        </>

    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        margin: 7,
        textAlign: 'center'

    },
    subheader: {
        fontSize: 19,
        color: 'black',
        textAlign: 'center'
    }
})
export default DrawerContent;