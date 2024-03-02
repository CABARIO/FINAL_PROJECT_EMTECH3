// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import IconDrawer from './IconDrawer';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the Home Screen</Text>
      <IconDrawer navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
