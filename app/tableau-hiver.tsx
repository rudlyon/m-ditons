import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import hiver from "../assets/images/hiver.jpg";
import TableauxLink from "@/components/tableauxLink";

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
      >
        <TableauxLink
          href="/tableau-printemps"
          style={styles.linkContainerPrintemps}
        >
          Printemps
        </TableauxLink>
        <TableauxLink
          href="/tableau-automne"
          style={styles.linkContainerAutomne}
        >
          Automne
        </TableauxLink>
      </ImageBackground>
      <View>
        <Text>Hiver</Text>
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
