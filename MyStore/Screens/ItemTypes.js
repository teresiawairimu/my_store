import { StyleSheet, FlatList, Text, View, TouchableOpacity } from "react-native";
import ItemContext from "../Context/StoreContext";
import { useContext } from "react";

const ItemTypes = ({navigation, route}) => {

  const {Categories} = useContext(ItemContext);

  return (
    <FlatList
    data={Categories}
    renderItem={(element) => {
      //console.log(element);
      return (
        <TouchableOpacity onPress={() => {navigation.navigate("List", {toyCategory: element.item})}}>
          <View style={styles.item}>
            <Text>{element.item}</Text>
          </View>
        </TouchableOpacity>
      )
    }}
    keyExtractor={(category) => category}
    />
  );
};


const styles = StyleSheet.create({
  item: {
    padding: 10
  }
});

export default ItemTypes;