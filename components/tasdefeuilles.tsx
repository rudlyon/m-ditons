import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import feuilleImage from "../assets/images/feuillemorte.png";

const { width, height } = Dimensions.get("window");

import { ViewStyle } from "react-native";

function Feuille({ style }: { style: ViewStyle }) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[style, animatedStyle]}>
        <Image source={feuilleImage} style={styles.image} />
      </Animated.View>
    </PanGestureHandler>
  );
}

export default function TasDeFeuilles() {
  const feuilles = Array.from({ length: 100 }).map((_, index) => {
    const randomX = Math.random() * width;
    const randomY = Math.random() * height;
    return (
      <Feuille
        key={index}
        style={{ ...styles.feuille, top: randomY, left: randomX }}
      />
    );
  });

  return <View style={styles.container}>{feuilles}</View>;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  feuille: {
    position: "absolute",
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
