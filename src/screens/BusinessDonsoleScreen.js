import React,{useState} from 'react'

import {View, Text, StyleSheet,TouchableOpacity,
         ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar} from 'react-native';
import { Icon} from 'react-native-elements'

export default function BusinessConsoleScreen(){
    return(
        <View>
            <Text>Welcome to Business console</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"

            }
})