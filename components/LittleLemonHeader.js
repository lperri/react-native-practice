import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.1, alignItems: 'center', backgroundColor: '#F4CE14' }}>
      <Text style={{ padding: 20, textAlign: 'center', fontSize: 28, color: 'black' }}>
        Little Lemon
      </Text>
    </View>
  );
}