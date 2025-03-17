import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { useContext } from "react";
import ItemContext from "../Context/StoreContext";

const AddItem = ({navigation, route}) => {

  const { addToyFn} = useContext(ItemContext);
 
  const addFn = addToyFn();
  //console.log(addFn);

  

  let newToy = {};
  newToy.id = Math.floor(Math.random() * 100);

  return (
    <View>
      <Text>Toy Category:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(newValue) => newToy.category = newValue}
      />
      <Text>Toy Name:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(newValue) => newToy.name = newValue}
      />
      <Text>Toy Price:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => newToy.price = newValue}
      />
      <Text>Toy Description:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => newToy.desc = newValue}
      />
      <Button title="Add Toy" onPress={() => {addFn(newToy); navigation.navigate("List", {toyCategory: newToy.category})}} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default AddItem;