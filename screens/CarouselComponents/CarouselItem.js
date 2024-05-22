import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

export default CarouselItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3, width: "80%" }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.3,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  title: {
    fontWeight: "800",
    fontSize: 40,
    marginBottom: 15,
    color: "black",
    textAlign: "center",
  },
  description: {
    fontSize: 17,
    fontWeight: "300",
    color: "8C8C8C",
    textAlign: "center",
  },
});
