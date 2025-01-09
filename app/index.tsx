import { ImageBackground, StyleSheet, View, Text } from "react-native";
import fondécran from "../assets/images/fond.jpg";
import Cards from "../components/cards";

export default function Index() {
  return (
    <ImageBackground style={styles.background} source={fondécran}>
      <View style={styles.gridContainer}>
        <Cards href="/tableau-automne">Les saisons</Cards>
        <Cards href="/tableau-automne">Les élements</Cards>
        <Cards href="/tableau-automne">Les sens</Cards>
        <Cards href="/tableau-automne">La contemplation</Cards>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundSize: "auto",
    alignItems: "center",
    justifyContent: "center",
  },

  linkContainerSaisons: {
    width: "auto",
    margin: 10,
    opacity: 0.5,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
