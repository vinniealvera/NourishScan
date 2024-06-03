import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Background from "./BackgroundHome";
import blankProfile from "../assets/blankProfile.webp";
import article from "../assets/home/Group 1.png";
import Meal1 from "../assets/home/meal1.png";
import Meal2 from "../assets/home/meal2.png";
import Meal3 from "../assets/home/meal3.png";

const HomeScreen = () => {
  return (
      <Background style={{flex: 1}} behavior= "padding">
        <ScrollView
          style={{
            flex: 1,
            width: "90%",
            alignContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <View style={{alignItems: "center", justifyContent: "center", marginHorizontal: 40, marginVertical: 30, marginLeft: 44}}>
            <Image
            source={blankProfile}
            style={{
              width: 80,
              height: 80,
              borderColor: "lightgrey",
              borderWidth: 4,
              borderRadius: 130,
              alignSelf: "center",
            }}
            />
            <Text style={{fontSize: 17, justifyContent: "center", color: "#DAAF53", fontWeight: "bold"}}>Hi!</Text>
            <Text style={{fontSize: 17, color: "black"}}>Find, track, and eat healthy food.</Text>
              <View style={[styles.card, styles.shadowProp]}>
              <View style={{flexDirection: 'row'}}>
              <View>
              <Text
              style={{
              fontSize: 10,
              fontWeight: "bold",
              color: "white",
              marginLeft: 10,
              }}
              >
              A R T I C L E
              </Text>
              <Text
              style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
              marginLeft: 9,
              }}
              >
              The pros and cons of
              </Text>
              <Text
              style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
              marginLeft: 10,
              }}
              >
              fast food.
              </Text>
              <Text
              style={{
              fontSize: 15,
              fontWeight: "bold",
              backgroundColor: "#FF8473",
              borderRadius: 10,
              width: 100,
              color: "white",
              marginLeft: 7,
              justifyContent: "center",
              alignContent: "center",
              marginVertical: 7,
              paddingVertical: 5,
              paddingHorizontal: 15,
              }}
              >
              Read Now
              </Text>
              </View>
              <Image source={article} style={{width: 100, height: 100, aspectRatio: 1.1}}></Image>
              </View>
              </View>

              <View style={[styles.card, styles.shadowProp]}>
              <View style={{flexDirection: 'row'}}>
              <View>
              <Text
              style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
              marginLeft: 9,
              }}
              >
              Track Your Daily
              </Text>
              <Text
              style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
              marginLeft: 10,
              }}
              >
              Consumption
              </Text>
              </View>
              <Text
              style={{
              fontSize: 15,
              fontWeight: "bold",
              backgroundColor: "white",
              borderRadius: 10,
              width: 100,
              color: "#8EB44F",
              marginLeft: 30,
              justifyContent: "center",
              alignContent: "center",
              marginVertical: 7,
              paddingVertical: 5,
              paddingHorizontal: 15,
              }}
              >
              View Now
              </Text>
              </View>
              </View>

              <Text style={{fontSize: 17, justifyContent: "center", color: "#DAAF53", fontWeight: "bold"}}>Daily Statistics</Text>
              <View style={[styles.card, styles.shadowProp]}>
              <View style={{flexDirection: 'row'}}>
              <View>
              <Text
              style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#F6EFDD",
              marginLeft: 15,
              marginRight: 30,
              width:20,
              borderRadius: 10,
              backgroundColor: "#F6EFDD",
              paddingVertical: 3,
              marginTop: 15,
              }}
              >
              T
              </Text>
              <Text
              style={{
              fontSize: 11,
              color: "white",
              marginLeft: 4,
              }}
              >
              Proteins
              </Text>
              </View>

              <View>
              <Text
              style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#F6EFDD",
              marginLeft: 8,
              width:20,
              borderRadius: 10,
              backgroundColor: "#F6EFDD",
              paddingVertical: 7,
              marginTop: 7,
              }}
              >
              T
              </Text>
              <Text
              style={{
              fontSize: 11,
              color: "white",
              marginLeft: 2,
              }}
              >
              Sugars
              </Text>
              </View>

              <View>
              <Text
              style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#F6EFDD",
              marginLeft: 15,
              width:20,
              borderRadius: 10,
              backgroundColor: "#F6EFDD",
              paddingVertical: 10,
              marginTop: 2,
              marginLeft: 25
              }}
              >
              T
              </Text>
              <Text
              style={{
              fontSize: 11,
              color: "white",
              marginLeft: 15,
              }}
              >
              Calories
              </Text>
              </View>

              <View>
              <Text
              style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#F6EFDD",
              marginLeft: 15,
              width:20,
              borderRadius: 10,
              backgroundColor: "#F6EFDD",
              paddingVertical: 9,
              marginTop: 4,
              marginLeft: 27
              }}
              >
              T
              </Text>
              <Text
              style={{
              fontSize: 11,
              color: "white",
              marginLeft: 22,
              }}
              >
              Carbs
              </Text>
              </View>

              <View>
              <Text
              style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#F6EFDD",
              marginLeft: 15,
              width:20,
              borderRadius: 10,
              backgroundColor: "#F6EFDD",
              paddingVertical: 11,
               marginLeft: 30
              }}
              >
              T
              </Text>
              <Text
              style={{
              fontSize: 11,
              color: "white",
              marginLeft: 33,
              }}
              >
              Fat
              </Text>
              </View>

              </View>
              </View>

              <Text style={{fontSize: 17, justifyContent: "center", color: "#DAAF53", fontWeight: "bold", marginBottom: 10}}>Meal Suggestion</Text>
              <View style={{flexDirection: 'row'}}>
              <View>
              <Image source={Meal2} style={styles.Image}></Image>
              <Text
              style={{
              fontSize: 10,
              color: "black",
              marginRight: 23,
              }}
              >
              Lemon-Garlic Pasta
              </Text>
              <Text
              style={{
              fontSize: 10,
              color: "black",
              marginLeft: 12,
              }}
              >
              with Salmon
              </Text>
              <Text
              style={{
              fontSize: 10,
              color: "#EF6160",
              marginLeft: 12,
              }}
              >
              473 calories
              </Text>
              </View>

              <View>
              <Image source={Meal1} style={styles.Image}></Image>
              <Text
              style={{
              fontSize: 10,
              color: "black",
              marginRight: 18,

              }}
              >
              Cheese Quesadillas          
              </Text>
              <Text
              style={{
              fontSize: 10,
              color: "#EF6160",
              marginLeft: 12,
              }}
              >
              385 calories
              </Text>
              </View>

              <View>
              <Image source={Meal3} style={styles.Image}></Image>
              <Text
              style={{
              fontSize: 10,
              color: "black",
              
              }}
              >
              Salmon Sushi Grain
              </Text>
              <Text
              style={{
              fontSize: 10,
              color: "black",
              marginLeft: 30,
              }}
              >
              Bowl
              </Text>
              <Text
              style={{
              fontSize: 10,
              color: "#EF6160",
              marginLeft: 12,
              }}
              >
              432 calories
              </Text>
              </View>

              </View>

          </View>
          </ScrollView>
      </Background>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  Text: {
    color: "#DAAF53",
    fontSize: 17
  },
  card: {
    backgroundColor: "#8EB44F",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "120%",
    marginVertical: 10,
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  Image: {
    width: 80,
    height: 80,
    // marginRight
  }
})
