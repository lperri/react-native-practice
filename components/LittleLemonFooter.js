import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function LittleLemonFooter() {
  return (
    <View style={{ flex: 0.06, alignItems: 'center', backgroundColor: '#F4CE14' }}>
      <Text style={{ padding: 10, fontSize: 16, color: 'black' }}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}