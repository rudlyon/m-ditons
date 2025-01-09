import React, { useEffect } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import feuilleImage from "../assets/images/feuillemorte.png";

const { width, height } = Dimensions.get("window");

export default function Feuille({ style }) {
  const translateY = useSharedValue(0);

  useEffect(() => {
    // Simulate blowing effect
    translateY.value = withTiming(-height, { duration: 2000 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[style, animatedStyle]}>
      <Image source={feuilleImage} style={styles.image} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
