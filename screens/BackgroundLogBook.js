import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const BackgroundLogBook = ({children}) => {
  return (
    <View>
        <ImageBackground source={require("../assets/LogBook.png")} style={{height: '100%'}}/>
        
    </View>
  )
}

export default BackgroundLogBook

const styles = StyleSheet.create({})