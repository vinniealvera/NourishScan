import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreenView";
import StartCarousel from "./screens/StartCarousel";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./screens/Navbar";

// export default function App() {
//   const [isShowSplash, setIsShowSplash] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsShowSplash(false);
//     }, 3500);
//   });

//   return <>{isShowSplash ? <SplashScreen /> : <StartCarousel />}</>;

//   // return <SplashScreen />;
// }

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
