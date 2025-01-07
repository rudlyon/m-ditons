import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function TableauxLink() {
  const [linkText, setLinkText] = useState("Tableau-hiver");

  return (
    <View style={styles.linkContainer}>
      <TouchableOpacity
        onPressIn={() => setLinkText("Tableau-hiver")}
        onPressOut={() => setLinkText(">")}
        activeOpacity={1}
      >
        <Link style={styles.link} href="./tableau-hiver">
          {linkText}
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "auto",
    marginBottom: 10,
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
    zIndex: 10,
  },
  leaf: {
    width: 50,
    height: 50,
  },
});
