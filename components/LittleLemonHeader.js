import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.headerContainer}>
      <Text style={headerStyles.headerText}>Little Lemon</Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerContainer: {
    flex: 0.1,
    alignItems: "center",
    backgroundColor: "#F4CE14",
  },
  headerText: {
    padding: 20,
    textAlign: "center",
    fontSize: 28,
    color: "black",
  },
});
