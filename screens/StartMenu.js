import { Text, Image, StyleSheet, View } from "react-native";
import NourishScanLogo_Color from "../assets/NourishScanLogo_Color.png";

export default function StartMenu() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={NourishScanLogo_Color} style={styles.Image} />
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
    backgroundColor: "white",
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
