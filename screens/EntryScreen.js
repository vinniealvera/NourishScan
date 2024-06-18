import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios'
import { BarChart } from "react-native-gifted-charts";
import { useFocusEffect } from '@react-navigation/native';
import {ip} from "../App"

import hamburger from "../assets/Misc/hamburgerPlaceholder.png";
import graph from "../assets/Misc/graphPlaceholder.png";
import backArrow from "../assets/icons/backArrow.png";
import homeGrey from "../assets/icons/homeGrey.png";
import logbookAdd from "../assets/icons/logbookAdd.png";
import HomeScreen from "./HomeScreen";
import { ScreenHeight, ScreenWidth } from "@rneui/base";




const EntryScreen = (props) => {

  const [result, getresult] = useState([])
  const [isloading, setisloading] = useState(false)
  const [foodName, setFoodName] = useState("");
  const [foodDesc, setFoodDesc] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodCal, setFoodCal] = useState(0);
  const [foodCarbs, setFoodCarbs] = useState(0);
  const [foodFat, setFoodFat] = useState(0);
  const [foodProtein, setFoodProtein] = useState(0);



  const fetchData = async () => {
    const host = ip.concat("predict/result");

    try {

      setisloading(true)
      const response = await axios.get(host);

      getresult(response.data);
      setisloading(false)

    } catch (error) {
      console.log(error.response.status);
   
    }    

  }
  
  useFocusEffect(
  React.useCallback(() => {
    

    fetchData();

 
 
    return () => {
      getresult([])
    };
  }, []))

  useEffect(()=>{
    if (result && result.nutrition) {
      setFoodName(result.name);
      setFoodCarbs(result.nutrition.carbs.value);
      setFoodDesc(result.description);
      setFoodCal(result.nutrition.calories.value)
      setFoodFat(result.nutrition.fat.value);
      setFoodProtein(result.nutrition.protein.value);
      setFoodImage(result.img_link);
    }
  }, [result])
  return (
  <View >
    
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Scanner")}>
        <Image source={backArrow} style={styles.backArrow} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Nutritional Details</Text>
    </View>
  
    <SafeAreaView style={styles.content}>
  
     
      {isloading && !result.nutrition ? <ActivityIndicator style={styles.ActivityIndicator} size={"large"}></ActivityIndicator> :
         <ScrollView style={{ alignContent: "center" }}>
        <View style={{height : 900, alignItems : "center"}}>
        <View>
          <Image source={{ uri: foodImage}} style={styles.foodImage}  />
          <Text style={styles.foodName}>{foodName.charAt(0).toUpperCase() + foodName.slice(1)}</Text>
          <Text style={styles.foodCal}>{foodCal} kcal</Text>
          <Text style={styles.foodDesc}>{foodDesc}</Text>
          <View style={{ justifyContent: "center", alignSelf: "center", marginLeft:25, height:300, paddingTop:20, }}>
      <BarChart      
   
      barWidth={25}
          
                hideYAxisText  
                barBorderRadius={10}
                frontColor={"#DAAF53"}
                
                data={[
                  {  value: foodProtein,
                    labelComponent: () => (
                      <View >
                      <Text style={{color: '#FF8473', fontWeight:"bold",textAlign : "center", fontSize : 14, marginTop:6,marginBottom:3}}>Protein</Text>
                      <Text style={{color: '#FF8473', textAlign : "center", fontSize : 18}}>{foodProtein} g</Text></View>
                    ),},
                  {  value: foodCal,
                    labelComponent: () => (
                      <View >
                      <Text style={{color: '#FF8473', fontWeight:"bold", textAlign : "center", fontSize : 14, marginTop:6,marginBottom:3}}>Calories</Text>
                      <Text style={{color: '#FF8473',  textAlign : "center", fontSize : 18}}>{foodCal} g</Text></View>
                    ),},
                  {
                    value: foodFat,
                    labelComponent: () => (
                      <View >
                      <Text style={{color: '#FF8473', fontWeight:"bold", textAlign : "center", fontSize : 14, marginTop:6,marginBottom:3}}>Fat</Text>
                      <Text style={{color: '#FF8473',  textAlign : "center", fontSize : 18}}>{foodFat} g</Text></View>
                    ),
                  },
                  {  value: foodCarbs,
                    labelComponent: () => (
                      <View >
                      <Text style={{color: '#FF8473', fontWeight:"bold", textAlign : "center", fontSize : 14, marginTop:6,marginBottom:3}}>Carbs</Text>
                      <Text style={{color: '#FF8473', textAlign : "center", fontSize : 18}}>{foodCarbs} g</Text></View>
                    ),},
              
                ]}
       
                hideAxesAndRules
                spacing={50}
                height={80}
            
                />
    </View>
    <View style={styles.buttons}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
              <View style={styles.homeBtn}>
                <Image source={homeGrey} style={styles.homeIcon}></Image>
              </View>
            </TouchableOpacity>

            {/* temporary redirect to profile karena logbook blm beres */}
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
            
              <View style={styles.addBtn}>
                {/*<Image source={logbookAdd} style={styles.addIcon} />*/}
                <Text style={styles.addText}>ADD TO LOGBOOK</Text>
              </View>

            </TouchableOpacity>
          </View>
        </View>
        </View>
        </ScrollView>
  }
 



    </SafeAreaView>
  </View>
);
};

export default EntryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  ActivityIndicator : {
    top : ScreenHeight / 2 - 100
    
    
  },
  header: {
    backgroundColor: "white",

    flexDirection: "row",


    paddingTop: 45,

    justifyContent : "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    marginRight : 14
  },
  backArrow: {
    marginRight: 20,
    width: 25,
    height: 25,
  },

  content: {
    backgroundColor: "white",
    paddingTop : -24,
    marginBottom: 155,
  },

  foodImage: {
    alignSelf: "center",

    width: 333,
    height: 295,
    borderRadius: 20,

    shadowColor: "black",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  foodName: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 23,
    textAlign: "center",
  },
  foodCal: {
    alignSelf: "center",
    textAlign: "center",
    marginTop: 4,
    paddingLeft:6,
    paddingRight:6,
  
    fontSize: 15,
    fontWeight: "600",
    color: "white",

    backgroundColor: "#DAAF53",

    borderRadius: 8,
  },
  foodDesc: {
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
    marginHorizontal: 25,
   
    color: "#656565",
    fontSize: 15.5,
  },

  graph: {
    width: 366,
    height: 177,
    borderRadius: 20,

    marginTop: 10,
    alignSelf: "center",
  },

  buttons: {
    flexDirection: "row",
  
    justifyContent: "center",
    gap:10  },

  homeBtn: {
    backgroundColor: "lightgrey",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginRight: 15,
  },
  homeIcon: {
    width: 30,
    height: 30,
  },

  
  addBtn: {
    height:60,
    flexDirection: "row",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginRight: 15,
    backgroundColor: "#8EB44F",
  },
  addIcon: {
    width: 42,
    height: 42,
    marginRight: 10,
  },
  addText: {
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
