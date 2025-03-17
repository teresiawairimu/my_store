import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { useContext, useState } from "react";
import ItemContext from "../Context/StoreContext";

const EditItem = ({navigation, route}) => {

  const Toy = route.params.toyItem;
  const {editToyFn} = useContext(ItemContext);

  const editFn = editToyFn();

  const [editedToy, setEditedToy] = useState({
    id: Toy.id,
    category: Toy.category,
    name: Toy.name,
    price: Toy.price.toString(),
    desc: Toy.desc,
  });

  return (
      <View>
          <Text>Toy Category:</Text>
          <TextInput 
            style={styles.input}
            defaultValue={editedToy.category}
            onChangeText={(newValue) => setEditedToy({...editedToy, category: newValue})}
          />
          <Text>Toy Name:</Text>
          <TextInput 
            style={styles.input}
            defaultValue={editedToy.name}
            onChangeText={(newValue) => setEditedToy({...editedToy, name: newValue})}
          />
          <Text>Toy Price:</Text>
          <TextInput
            style={styles.input}
            defaultValue={editedToy.price}
            onChangeText={(newValue) => setEditedToy({...editedToy, price: newValue})}
          />
          <Text>Toy Description:</Text>
          <TextInput
            style={styles.input}
            defaultValue={editedToy.desc}
            onChangeText={(newValue) => setEditedToy({...editedToy, desc: newValue})}
          />
          <Button title="Save Changes" onPress={() => { console.log(editedToy);
                                                        editFn({...editedToy, price: parseFloat(editedToy.price) }); 
                                                        navigation.navigate("List", {toyCategory: editedToy.category})
                                                        }}
          />
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

export default EditItem;