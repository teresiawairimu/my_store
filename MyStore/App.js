import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { ItemProvider } from "./Context/StoreContext";
import ItemTypes from "./Screens/ItemTypes";
import ItemList from "./Screens/ItemList";
import ItemDetails from "./Screens/ItemDetails";
import AddItem from "./Screens/AddItem";
import EditItem from "./Screens/EditItem";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ItemCategories">
        <Stack.Screen 
          name= "ItemCategories" 
          component={ItemTypes}
          options={{
            title: "Types of Toys"
          }} 
        />
        <Stack.Screen 
          name= "List"
          component={ItemList} 
        />
        <Stack.Screen name= "Details" component={ItemDetails} />
        <Stack.Screen name= "Add" component={AddItem} />
        <Stack.Screen name= "Edit" component={EditItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <ItemProvider>
      <App />
    </ItemProvider>
  );
};

