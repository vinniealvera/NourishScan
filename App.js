import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreenView";
import StartCarousel from "./screens/StartCarousel";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./screens/Navbar";
import Login from "./screens/LoginScreen";
import SignUp from "./screens/SignUpScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import ForgotScreen from "./screens/ForgotScreen";
import ScannerScreen from "./screens/ScannerScreen";
import EntryScreen from "./screens/EntryScreen";

export const ip =  "http://192.168.0.104:5000/"
const Stack = createNativeStackNavigator();

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShowSplash(false);
  //   }, 3500);
  // });

  // if (isShowSplash) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartCarousel">
        <Stack.Screen
          options={{ headerShown: false }}
          name="StartCarousel"
          component={StartCarousel}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgotPassword"
          component={ForgotScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // for debugging
    // <EntryScreen></EntryScreen>
  );
};

export default App;
