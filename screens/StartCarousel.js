import {
  Text,
  Image,
  StyleSheet,
  View,
  FlatList,
  Animated,
} from "react-native";
// import NourishScanLogo_Color from "../assets/NourishScanLogo_Color.png";
import React, { useState, useRef } from "react";

import CarouselSlides from "./CarouselSlides";
import CarouselItem from "./CarouselItem";

export default function StartCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].currentIndex);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentTreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={CarouselSlides}
          renderItem={({ item }) => <CarouselItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
        />
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
});
