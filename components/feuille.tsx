import React, { useEffect, useRef } from "react";
import { Animated, PanResponder, View, Image, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import Emoji from "../assets/images/feuillemorte.png";

const Feuille = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const soundObject = useRef(new Audio.Sound()).current;
  const backgroundSound = useRef(new Audio.Sound()).current;

  useEffect(() => {
    // Load sound
    const loadSound = async () => {
      try {
        await soundObject.loadAsync(
          require("../assets/sounds/sonmouvement.wav")
        );
        await backgroundSound.loadAsync(
          require("../assets/sounds/sondefond.mp3")
        );
        await backgroundSound.setIsLoopingAsync(true);
        await backgroundSound.playAsync();
      } catch (error) {
        console.error(error);
      }
    };

    loadSound();

    return () => {
      soundObject.unloadAsync();
      backgroundSound.unloadAsync();
    };
  }, [soundObject, backgroundSound]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: async () => {
        pan.setOffset({
          x: (pan.x as any)._value,
          y: (pan.y as any)._value,
        });
        pan.setValue({ x: 0, y: 0 });
        try {
          await soundObject.replayAsync();
        } catch (error) {
          console.error(error);
        }
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: async () => {
        pan.flattenOffset();
        try {
          await soundObject.pauseAsync();
        } catch (error) {
          console.error(error);
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View {...panResponder.panHandlers} style={pan.getLayout()}>
        <Image source={Emoji} style={styles.leaf} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  leaf: {
    width: 100,
    height: 100,
  },
});

export default Feuille;
