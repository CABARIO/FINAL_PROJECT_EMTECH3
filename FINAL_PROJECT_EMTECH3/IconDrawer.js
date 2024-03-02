//IconDrawer.
import React from 'react';
import { View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconDrawer = () => {
  return (
    <View style={styles.iconics}>
      <View>
        <Pressable onPress={() => console.log('Calendar pressed')}>
          <Icon name="calendar" size={30} style={styles.usericon} />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={() => console.log('Home pressed')}>
          <Icon name="home" size={30} style={styles.usericon} />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={() => console.log('List pressed')}>
          <Icon name="th-list" size={30} style={styles.usericon} />
        </Pressable>
      </View>

      <View>
        <Pressable onPress={() => console.log('Lightbulb pressed')}>
          <Icon name="lightbulb-o" size={30} style={styles.usericon} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = {
  iconics: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  usericon: {
    color: 'black'
  }
};

export default IconDrawer;
