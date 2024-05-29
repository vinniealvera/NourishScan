import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Animated,
  Pressable,
  TouchableOpacity,
} from "react-native";
// import NourishScanLogo_Color from "../assets/NourishScanLogo_Color.png";
import React, { useState, useRef } from "react";

import CarouselSlides from "./CarouselComponents/CarouselSlides";
import CarouselItem from "./CarouselComponents/CarouselItem";
import Paginator from "./CarouselComponents/Paginator";

export default function StartCarousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].currentIndex);
  }).current;

  const viewConfig = useRef({
    minimumViewTime: 50,
    viewAreaCoveragePercentTreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 4.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={CarouselSlides}
          renderItem={({ item }) => <CarouselItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig.current}
          style={{
            flex: 3,
            paddingBottom: 0,
            marginBottom: -150,
            marginTop: 35,
          }}
        />
        <Paginator data={CarouselSlides} scrollX={scrollX} />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text style={styles.textBtn}>GET STARTED</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17 }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: "#91C788" }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
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
  textBtn: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 100,
    borderRadius: 39,
    elevation: 3,
    backgroundColor: "#DAAF53",
    marginBottom: 20,
  },
});
