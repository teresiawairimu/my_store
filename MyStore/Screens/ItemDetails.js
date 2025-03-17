import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useLayoutEffect } from "react";

const ItemDetails = ({navigation, route}) => {

  const Toy = route.params.toyItem;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => {navigation.navigate("Edit", {toyItem: Toy})}}>
            <Feather name="edit" size={30} color="black" />
          </TouchableOpacity> 
        );
      }
    })
  }, []);
  return (
    <View>
      <Text style={styles.details}> Category:  {Toy.category} </Text>
      <Text style={styles.details}> Name: {Toy.name}</Text>
      <Text style={styles.details}> Price: {Toy.price} </Text>
      <Text style={styles.details}> Desc: {Toy.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    padding: 10
  }
});

export default ItemDetails;
