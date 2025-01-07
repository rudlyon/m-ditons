import { ImageBackground, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import automne from "../assets/images/automne.jpg";
import Feuille from "../components/feuille";
import TableauxLink from "../components/tableauxLink";
export default function Index() {
  const Hiver = "Hiver";
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground source={automne} style={styles.background}>
        <Feuille />
        <TableauxLink href="/tableau-hiver" style={styles.linkContainerHiver}>
          Hiver
        </TableauxLink>
        <TableauxLink href="/tableau-été" style={styles.linkContainerEte}>
          Été
        </TableauxLink>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    zIndex: -5,
  },
  linkContainerHiver: {
    position: "absolute",
    bottom: 0,
    right: 10,
    width: "auto",
    marginBottom: 10,
  },
  linkContainerEte: {
    position: "absolute",
    bottom: 0,
    left: 10,
    width: "auto",
    marginBottom: 10,
  },
});
