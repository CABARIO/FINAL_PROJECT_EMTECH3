import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.Seachbar}>
        <Text>Search</Text>
        <Icon name="search" size={15} style={styles.searchicon} />
        
      </View>
      <View style={styles.groceryList}>
        <Text>Grocery List</Text>
      </View>
      <View style={styles.viewRecipes}>
        <Text > View Recipes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Seachbar:{
    borderWidth: 1,
    padding: 10,
    marginTop: 40,
    width: '80%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchicon:{
  marginRight: 5,
  },
  groceryList:{
    padding: 15,
    marginTop: '90%',
    borderWidth: 1,
    width: '40%',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  viewRecipes:{
    padding: 13,
    borderWidth: 1,
    width: '40%',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
  }
});
