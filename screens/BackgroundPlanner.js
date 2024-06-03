import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const BackgroundPlanner = ({children}) => {
  return (
    <View>
        <ImageBackground source={require("../assets/Planner.png")} style={{height: '100%'}}/>
        <View style={{position: "absolute"}}>
            {children}
        </View>
    </View>
  )
}

export default BackgroundPlanner

const styles = StyleSheet.create({})