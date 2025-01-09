import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import printemps from "../assets/images/printemps.jpg";
import TableauxLink from "../components/tableauxLink";

export default function tableauPrintemps() {
  return (
    <GestureHandlerRootView>
      <ImageBackground
        source={printemps}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableauxLink href="/tableau-ete" style={styles.linkContainerHiver}>
          Été
        </TableauxLink>
        <TableauxLink href="/tableau-hiver" style={styles.linkContainerEte}>
          Hiver
        </TableauxLink>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  linkContainerHiver: {
    position: "absolute",
    bottom: 50,
    right: 10,
    width: "auto",
    marginBottom: 10,
  },
  linkContainerEte: {
    position: "absolute",
    bottom: 50,
    left: 10,
    width: "auto",
    marginBottom: 10,
  },
});
