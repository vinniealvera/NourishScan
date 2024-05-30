import React, { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet, Image, View } from "react-native";
import NourishScanLogo_White from "../assets/NourishScanLogo_White.png";

export default function SplashScreen() {
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(floatAnim, {
        toValue: -25,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [floatAnim]);

  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          style={[styles.float, { transform: [{ translateY: floatAnim }] }]}
        >
          <Image source={NourishScanLogo_White} style={styles.Image} />
          <Text style={styles.Text}>Nourish Scan</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8EB44F",
  },
  Image: {
    width: 300,
    aspectRatio: 0.87,
    resizeMode: "cover",
    marginVertical: 17,
    alignSelf: "center",
  },
  Text: {
    color: "white",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
});
