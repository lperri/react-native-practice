import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0.06,
    alignItems: "center",
    backgroundColor: "#F4CE14",
  },
  footerText: { padding: 10, fontSize: 16, color: "black" },
});
