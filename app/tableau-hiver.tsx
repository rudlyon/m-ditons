import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import hiver from "../assets/images/hiver.jpg";

export default function tableauHiver() {
  return (
    <GestureHandlerRootView>
      <ImageBackground
        source={hiver}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></ImageBackground>
      <View>
        <Text>hiver</Text>
      </View>
    </GestureHandlerRootView>
  );
}
