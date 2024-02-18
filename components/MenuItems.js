import * as React from 'react';  
import { View, Text, ScrollView, FlatList } from 'react-native';
    

export default function MenuItems() {
  // Sample menu items data
  const menuItemsToDisplay = [
    {'id': 0, 'name': 'Hummus'},
    {'id': 1, 'name': 'Moutabal'},
    {'id': 2, 'name': 'Falafel'},
    {'id': 3, 'name': 'Marinated Olives'},
    {'id': 4, 'name': 'Kofta'},
    {'id': 5, 'name': 'Eggplant Salad'},
    {'id': 6, 'name': 'Lentil Burger'},
    {'id': 7, 'name': 'Smoked Salmon'},
    {'id': 8, 'name': 'Panna Cotta'}
  ];

  // Render each menu item
  const renderItem = ({ item }) => (
    <View style={{paddingLeft: 15, borderBottomWidth: 0, borderBottomColor: '#ddd' }}>
      <Text style={{fontSize: 20}}>{item.name}</Text>
    </View>
  );

  // Add a separator component after each item
  const ItemSeparatorComponent = () => <Text>{'\n'}</Text>;

  return (
    <View style={{flex: 0.3}}>
    <Text style={{ color: 'black', fontSize: 28, flexWrap: 'wrap', padding: 15, paddingBottom: 30}}>
      View Menu</Text>
    <FlatList
      data={menuItemsToDisplay}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      indicatorStyle='white'
    />
    </View>
  );
};
