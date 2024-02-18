import { StyleSheet, View } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonWelcome from "./components/LittleLemonWelcome";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#495E57",
      }}
    >
      <LittleLemonHeader />
      <LittleLemonWelcome />
      <MenuItems />
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
