import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import LinearGradient from "react-native-linear-gradient";

import hamburger from "../assets/Misc/hamburgerPlaceholder.png";
import graph from "../assets/Misc/graphPlaceholder.png";
import backArrow from "../assets/icons/backArrow.png";
import homeGrey from "../assets/icons/homeGrey.png";
import logbookAdd from "../assets/icons/logbookAdd.png";
import HomeScreen from "./HomeScreen";

const EntryScreen = (props) => {
  const [foodImage, setFoodImage] = useState(hamburger);
  const [foodName, setFoodName] = useState("Hamburger");
  const [foodCal, setFoodCal] = useState(300);
  const [foodDesc, setFoodDesc] = useState(
    "A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread"
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Scanner")}>
          <Image source={backArrow} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Nutritional Details</Text>
      </View>
      <SafeAreaView style={styles.content}>
        <ScrollView style={{ alignContent: "center" }}>
          <Image source={foodImage} style={styles.foodImage} />
          <Text style={styles.foodName}>{foodName}</Text>
          <Text style={styles.foodCal}>{foodCal} kcal</Text>
          <Text style={styles.foodDesc}>{foodDesc}</Text>
          <Image source={graph} style={styles.graph} />
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
              {/* <LinearGradient
                colors={["#8EB44F", "#65A30D"]}
                style={styles.addBtn}
              > */}
              <View style={styles.addBtn}>
                <Image source={logbookAdd} style={styles.addIcon} />
                <Text style={styles.addText}>ADD TO LOGBOOK</Text>
              </View>
              {/* </LinearGradient> */}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default EntryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    backgroundColor: "#8EB44F",

    marginTop: 0,
    flex: 1,
    flexDirection: "row",
    padding: 0,
    paddingTop: 40,
    paddingHorizontal: 30,

    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,

    marginHorizontal: 20,
  },
  backArrow: {
    width: 25,
    height: 25,
  },

  content: {
    backgroundColor: "white",
    flex: 9,

    alignContent: "center",
    alignItems: "center",

    marginTop: 20,
    marginBottom: 135,
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

    fontSize: 15,
    fontWeight: "600",
    color: "white",

    backgroundColor: "#DAAF53",
    width: "17%",
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
    marginTop: 15,
    paddingHorizontal: 20,
  },

  homeBtn: {
    backgroundColor: "lightgrey",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginRight: 15,
  },
  homeIcon: {
    width: 41,
    height: 41,
  },

  addBtn: {
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
    fontSize: 23,
    fontWeight: "bold",
  },
});
