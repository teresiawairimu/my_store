import { StyleSheet, FlatList, Text, View, TouchableOpacity } from "react-native";
import ItemContext from "../Context/StoreContext";
import { useContext } from "react";

const ItemTypes = ({navigation, route}) => {

  const [ITypes, IList] = useContext(ItemContext);

  return (
    <FlatList
    data={ITypes}
    renderItem={(element) => {
      console.log(element);
      return (
        <TouchableOpacity onPress={() => {navigation.navigate("List", {toyCategory: element.item})}}>
          <Text>{element.item}</Text>
        </TouchableOpacity>
      )
    }}
    keyExtractor={(category) => category}
    />
  );
};

export default ItemTypes;