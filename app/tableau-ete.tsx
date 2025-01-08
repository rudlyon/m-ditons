import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import été from "../assets/images/été.jpg";
import TableauxLink from "../components/tableauxLink";

export default function tableauÉte() {
  return (
    <GestureHandlerRootView>
      <ImageBackground
        source={été}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableauxLink href="/" style={styles.linkContainerPrintemps}>
          Automne
        </TableauxLink>
        <TableauxLink
          href="/tableau-printemps"
          style={styles.linkContainerAutomne}
        >
          Printemps
        </TableauxLink>
      </ImageBackground>
      <View>
        <Text>Été</Text>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  linkContainerPrintemps: {
    position: "absolute",
    bottom: 0,
    right: 10,
    width: "auto",
    marginBottom: 10,
  },
  linkContainerAutomne: {
    position: "absolute",
    bottom: 0,
    left: 10,
    width: "auto",
    marginBottom: 10,
  },
});
