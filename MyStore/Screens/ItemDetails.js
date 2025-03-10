import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useLayoutEffect } from "react";

const ItemDetails = ({navigation, route}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => {navigation.navigate("Edit")}}>
            <Feather name="edit" size={30} color="black" />
          </TouchableOpacity> 
        );
      }
    })
  }, [])

  const Toy = route.params.toyItem;

  return (

    <Text> {Toy.category}, {Toy.name}, {Toy.price}, {Toy.desc}, {Toy.photo}</Text>
  );
};

export default ItemDetails;
