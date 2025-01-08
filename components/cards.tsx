import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Cards(props: any) {
  return (
    <View style={props.style}>
      <TouchableOpacity>
        <Link style={styles.card} href={props.href}>
          {props.children}
          <View style={styles.textContainer}>
            <Text style={styles.text}>{props.children}</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  card: {
    width: 150,
    height: 150,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "flex-end", // Align items to the bottom
    alignItems: "center", // Center items horizontally
    padding: 10,
    opacity: 0.5,
    margin: 10,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
