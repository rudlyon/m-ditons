import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function TableauxLink(props: any) {
  return (
    <View style={props.style}>
      <TouchableOpacity>
        <Link style={styles.link} href={props.href}>
          {props.children}
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 10,
  },
  leaf: {
    width: 50,
    height: 50,
  },
});
