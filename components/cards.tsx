import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";

export default function Cards(props: any) {
  return (
    <View style={props.style}>
      <TouchableOpacity>
        <Link style={styles.card} href={props.href}>
          <Text style={styles.text}>{props.children}</Text>
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
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
    padding: 10,
    opacity: 0.5,
    margin: 10,
  },
  textContainer: {
    flex: 1, // Take all available space
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
  },
  text: {
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
  },
});
