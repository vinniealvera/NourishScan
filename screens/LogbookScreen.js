import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BackgroundLogBook from "./BackgroundLogBook";
import NourishLogo from "../assets/NourishScanLogo_Color.png"

export default function LogbookScreen() {
  return (
    <BackgroundLogBook style={{flex: 1}} behavior= "padding">
      <View style={styles.container} behavior="padding">
      <Image source={NourishLogo}
        style={{
        justifyContent: "center", 
        alignContent: "center", 
        width: 80, 
        height: 80,
        aspectRatio: 0.87,
        marginLeft: 70,
        marginTop: 310,
        marginBottom: 10
        }}></Image>
        <Text style={{
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 90,
          color: "black"
        }}>Logbook coming soon..</Text>
      </View>
      
    </BackgroundLogBook>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
