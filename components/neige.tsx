import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import neigeImage from "../assets/images/neige.jpg";

const { width, height } = Dimensions.get("window");

export default function Neige() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
      opacity: opacity.value,
    };
  });

  const panGesture = Gesture.Pan().onUpdate((event) => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;
    opacity.value = 0; // Set opacity to 0 to simulate grattage
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.neige, animatedStyle]}>
        <Image source={neigeImage} style={styles.image} />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  neige: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
