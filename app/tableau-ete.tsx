import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import été from "../assets/images/été.jpg";
import TableauxLink from "../components/tableauxLink";

export default function tableauEte() {
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
        <TableauxLink
          href="/tableau-automne"
          style={styles.linkContainerPrintemps}
        >
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
    bottom: 50,
    right: 10,
    width: "auto",
    marginBottom: 10,
  },
  linkContainerAutomne: {
    position: "absolute",
    bottom: 50,
    left: 10,
    width: "auto",
    marginBottom: 10,
  },
});
