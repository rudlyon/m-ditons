import { ImageBackground, Image, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import image from "../assets/images/image.jpg";
import Feuille from "../components/feuille";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground
        source={image}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feuille />
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  leaf: {
    width: 50,
    height: 50,
  },
});
