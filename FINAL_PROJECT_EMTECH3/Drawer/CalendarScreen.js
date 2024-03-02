// CalendarScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const CalendarScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calendar Screen</Text>
      <IconDrawer navigation={navigation} />
    </View>
  );
};

export default CalendarScreen;
