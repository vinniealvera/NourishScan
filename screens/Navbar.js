import {
  ImageBackgroundComponent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../assets/icons/Home.svg";
import Planner from "../assets/icons/Planner.svg";
import Scanner from "../assets/icons/Scanner.svg";
import Logbook from "../assets/icons/Logbook.svg";
import Profile from "../assets/icons/Profile.svg";

// debugging
import EntryScreen from "./EntryScreen";

import HomeScreen from "./HomeScreen";
import PlannerScreen from "./PlannerScreen";
import ProfileScreen from "./ProfileScreen";
import ScannerScreen from "./ScannerScreen";
import LogbookScreen from "./LogbookScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{ top: -30, justifyContent: "center", alignItems: "center" }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#DAAF53",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: isKeyboardVisible
        ? { display: "none" }
        : {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            backgroundColor: "#8EB44F",
            borderRadius: 20,
            height: 70,
            elevation: 3,
            shadowColor: "#415224",
            shadowRadius: 3.5,
            shadowOpacity: 0.25,
            shadowOffset: {
              width: 0,
              height: 10,
            },
          },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 5 }}>
            <Home fill="white" resizeMode="contain" height={23}></Home>
            <Text style={{ color: "white", fontSize: 13 }}>Home</Text>
          </View>
        ),
      }}
    ></Tab.Screen>
    
    <Tab.Screen
      name="Planner"
      component={PlannerScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 5 }}>
            <Planner
              style={{ color: "white" }}
              resizeMode="contain"
              height={23}
            ></Planner>
            <Text style={{ color: "white", fontSize: 13 }}>Planner</Text>
          </View>
        ),
      }}
    ></Tab.Screen>
    
    <Tab.Screen
      name="Scanner"
      component={ScannerScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Scanner resizeMode="cover" height={45}></Scanner>
        ),
        tabBarButton: (props) => (
          <CustomTabBarButton {...props}></CustomTabBarButton>
        ),
      }}
    ></Tab.Screen>
  
    <Tab.Screen
      name="Logbook"
      component={LogbookScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 5 }}>
            <Logbook fill="white" resizeMode="contain" height={23}></Logbook>
            <Text style={{ color: "white", fontSize: 13 }}>Logbook</Text>
          </View>
        ),
      }}
    ></Tab.Screen>

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 5 }}>
            <Profile fill="white" resizeMode="contain" height={23}></Profile>
            <Text style={{ color: "white", fontSize: 13 }}>Profile</Text>
          </View>
        ),
      }}
    ></Tab.Screen>

<Tab.Screen
      name="Entry"
      component={EntryScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => null, 
        tabBarButton: () => null,
        
      }}
      style={{height : 0 , width : 0}}
    ></Tab.Screen>
  </Tab.Navigator>
  
  );
};

export default Tabs;

const styles = StyleSheet.create({});
