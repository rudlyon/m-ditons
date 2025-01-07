import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function TableauxLink() {
  const [linkText, setLinkText] = useState("Tableau-hiver");

  return (
    <>
      <TouchableOpacity
        style={styles.linkContainer}
        onPressIn={() => setLinkText("Tableau-hiver")}
        onPressOut={() => setLinkText(">")}
      >
        <Link style={styles.link} href="./tableau-hiver">
          {linkText}
        </Link>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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
