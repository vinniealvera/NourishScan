import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BackgroundPlanner from "./BackgroundPlanner";
import NourishLogo from "../assets/NourishScanLogo_Color.png"

export default function PlannerScreen() {
  return (
    <BackgroundPlanner style={{flex: 1}} behavior= "padding">
      <View style={styles.container} behavior="padding">
      <Image source={NourishLogo}
        style={{
        justifyContent: "center", 
        alignContent: "center", 
        width: 80, 
        height: 80,
        aspectRatio: 0.87,
        marginLeft: 87,
        marginTop: 310,
        marginBottom: 10
        }}></Image>
        <Text style={{
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 90,
          color: "black"
        }}>Join our membership</Text>
        <Text style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "black",
          marginLeft: 90}}>to access planner</Text>
      </View>
      
    </BackgroundPlanner>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
