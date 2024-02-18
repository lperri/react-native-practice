import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function LittleLemonWelcome() {
  return (
    <View style={welcomeStyles.welcomeContainer}>
      <ScrollView indicatorStyle="white">
        <Text style={welcomeStyles.welcomeTitle}>Welcome to Little Lemon</Text>
        <Text style={welcomeStyles.welcomeText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  welcomeContainer: {
    flex: 0.3,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  welcomeTitle: {
    padding: 0,
    fontSize: 28,
    textAlign: "center",
    color: "white",
    flexWrap: "wrap",
  },
  welcomeText: {
    padding: 15,
    fontSize: 20,
    textAlign: "center",
    color: "white",
    flexWrap: "wrap",
  },
});
