import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreenView";
import StartMenu from "./screens/StartMenu";
import { useEffect, useState } from "react";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3500);
  });

  return <>{isShowSplash ? <SplashScreen /> : <StartMenu />}</>;

  // return <SplashScreen />;
}
