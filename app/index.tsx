import { ImageBackground, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import automne from "../assets/images/automne.jpg";
import Feuille from "../components/feuille";
import { Link } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Index() {
  const [linkText, setLinkText] = useState("Tableau-hiver");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground source={automne} style={styles.background}>
        <Feuille />
        <TouchableOpacity
          style={styles.linkContainer}
          onPressIn={() => setLinkText("Tableau-hiver")}
          onPressOut={() => setLinkText(">")}
        >
          <Link style={styles.link} href="./tableau-hiver">
            {linkText}
          </Link>
        </TouchableOpacity>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },

  linkContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },

  link: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 20,
  },
  leaf: {
    width: 50,
    height: 50,
  },
});
