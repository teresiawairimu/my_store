import { StyleSheet, FlatList, Text, View, TouchableOpacity } from "react-native";

const ToysTypes = ['Action Figures', 'Dolls', 'Plush Toys', 'Vehicles']

const ItemTypes = ({navigation, route}) => {
  return (
    <FlatList
    data={ToysTypes}
    renderItem={(element) => {
      console.log(element);
      return (
        <TouchableOpacity onPress={() => {navigation.navigate('List', {toyCategory: element.item})}}>
          <Text>{element.item}</Text>
        </TouchableOpacity>
      )
    }}
    keyExtractor={(category) => category}
    />
  );
};

export default ItemTypes;