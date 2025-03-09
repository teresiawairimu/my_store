import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemTypes from './screens/ItemTypes';
import ItemList from './screens/ItemList';
import ItemDetails from './screens/ItemDetails';
import AddItem from './screens/AddItem';
import EditItem from './screens/EditItem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ItemCategories'>
        <Stack.Screen 
          name= 'ItemCategories' 
          component={ItemTypes}
          options={{
            title: 'Types of Toys'
          }} 
        />
        <Stack.Screen name= 'List' component={ItemList} />
        <Stack.Screen name= 'Details' component={ItemDetails} />
        <Stack.Screen name= 'Add' component={AddItem} />
        <Stack.Screen name= 'Edit' component={EditItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
