import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import {ip} from "../App"
import Background from "./BackgroundHome";
import blankProfile from "../assets/blankProfile.webp";
import article from "../assets/home/Group 1.png";
import Meal1 from "../assets/home/meal1.png";
import Meal2 from "../assets/home/meal2.png";
import Meal3 from "../assets/home/meal3.png";
import axios from 'axios'
import App from '../App';


const Graph = ({props, value}) => {

  const heightValue = value < 20 ? value + 20 : 40;

  return(

  <View style={{
    flexDirection : 'column-reverse',

    alignItems : 'center',
    alignContent : 'center',
    rowGap : 6,

    height : 63
    }}>
  <Text style={{ fontSize: 11, color: "white"}}>
  {props}
  </Text>
  <View style={{width : 15, height : heightValue, backgroundColor : "#F6EFDD",borderRadius : 8}}></View>
  </View>
)}

const HomeScreen = () => {
  const [suggestion, setSuggestion] = useState([])
  const [stats, setStats] = useState([])

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <Text style={{
                marginTop : 8,
              fontSize: 10,
              color: "black",
              textAlign : "center"
              
              }}>
        {item.name}
      </Text>
      <Text  style={{
              fontSize: 10,
              color: "#EF6160",
              textAlign : "center"
                
              }}>
        {item.calories} calories
      </Text>
    </View>
  );
  

  useEffect(() => {
    const fetchData = async () => {
      const host = ip.concat("food");
      const graphhost = ip.concat("history/statistics")
      try {
        const response = await axios.get(host);
        const graphresponse = await axios.get(graphhost)
        setStats(graphresponse.data)
        setSuggestion(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error); // Log any errors
      }
    };

    fetchData();
  }, []);
  return (
   
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
       
          paddingVertical: 50,
        }}>
          <View style={{height : 850, alignItems : "center", marginHorizontal: 40, marginLeft: 44}}>
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
              <View style={{flexDirection: 'row', justifyContent : 'space-between'}}>

              <Graph props={"Proteins"} value={stats.protein}/>
              <Graph props={"Fats"} value={stats.fat}/>
              <Graph props={"Sugars"} value={stats.sugar}/>
              <Graph props={"Calories"} value={stats.calories}/>
              <Graph props={"Carbs"} value={stats.carbs}/>
             

          

              </View>
              </View>

              <Text style={{fontSize: 17, justifyContent: "center", color: "#DAAF53", fontWeight: "bold", marginBottom: 10}}>Meal Suggestion</Text>
              
          <View style={{
              flex : 1,
              flexDirection : 'row'
          }}>
{suggestion && suggestion.length > 0 ? (
        <View style={{
          flex : 1,
          flexDirection : 'row'
      }}>
          {suggestion.slice(0, 3).map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </View>
      ) : null}
          </View>
          </View>
          </ScrollView>

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
  item: {

    textAlign : "center",
    alignItems : "center",
    width : 110
  },

  image: {
    width: 80,
    height: 80,
    borderRadius : 15,
    borderColor : "#8EB44F",
    borderWidth : 2
    // marginRight
  },
 
})
