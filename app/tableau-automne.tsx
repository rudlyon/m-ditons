import { ImageBackground, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import automne from "../assets/images/automne.jpg";
import Feuille from "../components/feuille";
import TableauxLink from "../components/tableauxLink";
import TasDeFeuilles from "@/components/tasdefeuilles";
export default function tableauAutomne() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground source={automne} style={styles.background}>
        <Feuille />
        <TasDeFeuilles />
        <TableauxLink href="/tableau-hiver" style={styles.linkContainerHiver}>
          Hiver
        </TableauxLink>
        <TableauxLink href="/tableau-ete" style={styles.linkContainerEte}>
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
