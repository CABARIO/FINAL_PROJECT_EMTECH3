
import React from 'react';
import { View, Text } from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>History Screen</Text>
      <IconDrawer navigation={navigation} />
    </View>
  );
};

export default NotificationScreen;
