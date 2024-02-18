import * as React from 'react';  
import { View, Text, ScrollView } from 'react-native';
    
export default function LittleLemonWelcome() {
  return (
    <View style={{flex: .3, alignItems: 'center', textAlign: 'center', backgroundColor: '#495E57' }}>
      <ScrollView indicatorStyle='white'>
      <Text style={{ padding: 0, fontSize: 28, textAlign: 'center', color: 'white', flexWrap: 'wrap' }}>
        Welcome to Little Lemon
      </Text>
      <Text style={{ padding: 15, fontSize: 20, textAlign: 'center', color: 'white', flexWrap: 'wrap'}}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
      </ScrollView>
    </View>
  );
}