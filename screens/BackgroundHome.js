import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const BackgroundHome = ({children}) => {
  return (
    <View>
        <ImageBackground source={require("../assets/home/HomePage.png")} style={{height: '100%'}}/>
        <View style={{position: "absolute"}}>
            {children}
        </View>
    </View>
  )
}

export default BackgroundHome

const styles = StyleSheet.create({})