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

const Stack = createNativeStackNavigator();

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

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <Tabs /> */}
//       <Stack.Navigator>
//         {/* <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUpScreen} /> */}
//         {/* <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} /> */}
//         <Stack.Screen options={{headerShown:false}} name="Forgot" component={ForgotScreen} />
//         {/* <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
