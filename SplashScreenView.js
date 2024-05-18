import { Text, StyleSheet, Image, View } from "react-native";
import NourishScanLogo_White from "./assets/NourishScanLogo_White.png";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={NourishScanLogo_White} style={styles.Image} />
        <Text style={styles.Text}>Nourish Scan</Text>
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
  },
  Text: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
});
