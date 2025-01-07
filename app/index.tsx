<<<<<<< HEAD
import { ImageBackground, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import automne from "../assets/images/automne.jpg";
import Feuille from "../components/feuille";
import TableauxLink from "../components/tableauxLink";
export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground source={automne} style={styles.background}>
        <Feuille />
        <TableauxLink></TableauxLink>
=======
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
>>>>>>> 797ec9788c3a6aa67de1c3b4f57429c76f282723
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  background: {
    width: "100%",
    height: "100%",
  },

  linkContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
=======
  leaf: {
    width: 50,
    height: 50,
>>>>>>> 797ec9788c3a6aa67de1c3b4f57429c76f282723
  },
});
