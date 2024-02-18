import * as React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function MenuItems() {
  // Sample menu items data
  const menuItemsToDisplay = [
    { id: 0, name: "Hummus" },
    { id: 1, name: "Moutabal" },
    { id: 2, name: "Falafel" },
    { id: 3, name: "Marinated Olives" },
    { id: 4, name: "Kofta" },
    { id: 5, name: "Eggplant Salad" },
    { id: 6, name: "Lentil Burger" },
    { id: 7, name: "Smoked Salmon" },
    { id: 8, name: "Panna Cotta" },
  ];

  // Render each menu item
  const renderItem = ({ item }) => (
    <View style={menuStyles.menuItemsContainer}>
      <Text style={menuStyles.menuItemText}>{item.name}</Text>
    </View>
  );

  // Add a separator component after each item
  const ItemSeparatorComponent = () => <Text>{"\n"}</Text>;

  return (
    <View style={menuStyles.menuContainer}>
      <Text style={menuStyles.viewMenuText}>View Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        indicatorStyle="white"
      />
    </View>
  );
}

const menuStyles = StyleSheet.create({
  menuContainer: { flex: 0.3 },
  viewMenuText: {
    color: "white",
    fontSize: 28,
    flexWrap: "wrap",
    padding: 15,
    paddingBottom: 30,
  },
  menuItemsContainer: {
    paddingLeft: 15,
    borderBottomWidth: 0,
    borderBottomColor: "#ddd",
  },
  menuItemText: { fontSize: 20, color: "#F4CE14" },
});
