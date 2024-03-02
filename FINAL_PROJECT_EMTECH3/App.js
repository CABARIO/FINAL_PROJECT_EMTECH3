//App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IconDrawer from './IconDrawer';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.moneyminder}>MONEYMINDER</Text>


        <View style={styles.Bills}>
          <View style={styles.Meralco}>
            <View>
            <Text style={styles.Header}>Meralco</Text>
            <Text>₱3,500</Text>
            <Text>Febuary 25, 2024 (OverDue)</Text>
            </View>
            <View>
            <Icon name="exclamation-circle" size={70} color={'#DC3545'} />
            </View>
          </View>

          <View style={styles.Maynilad}>
          <View>
            <Text style={styles.Header}>Maynilad (Water Services)</Text>
            <Text>₱3,500</Text>
            <Text>March 5, 2024 (Due in 3 Days)</Text>
            </View>
            <View>
            <Icon name="hourglass-o" size={70} color={'#FFC107'} />
            </View>
          </View>

          <View style={styles.Internet}> 
          <View>
            <Text style={styles.Header}>PLDT (Internet Services)</Text>
            <Text>₱1,500</Text>
            <Text>March 15, 2024 (Due in 15 Days)</Text>
            </View>
            <View>
            <Icon name="check-circle-o" size={70} color={'#28A745'} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dashboard}>
        <IconDrawer />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  upperContainer: {
    height: '92%',
    width: '100%',
    alignItems: 'center',
  },
  dashboard: {
    flex: 1,
    height: '8%',
    width: '100%',
    alignSelf: 'center',
    padding: 13,
    backgroundColor: '#007BFF',
  },
  moneyminder: {
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#007BFF',
  },
  Bills: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    marginTop: '10%',
    flexDirection: 'column',

  },
  Meralco: {
    padding: 25,
    backgroundColor: '#DE6874',
    width: '100%',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  },
  Maynilad: {
    padding: 25,
    backgroundColor: '#EEFA7F',
    marginTop: 20,
    borderRadius: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Internet: {
    padding: 25,
    backgroundColor: '#55FA7C',
    marginTop: 20,
    width: '100%',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Header: {
    fontWeight: 'bold',
    fontSize: 17
  },
});
