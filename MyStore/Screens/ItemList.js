import { StyleSheet, Text, View, FlatList, TouchableOpacity} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useLayoutEffect } from "react";
import ItemContext from "../Context/StoreContext";
import { useContext } from "react";

const ItemList = ({navigation, route}) => {

  const [ITypes, IList] = useContext(ItemContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => {navigation.navigate("Add")}}>
            <AntDesign name="pluscircle" size={30} color="black" />
          </TouchableOpacity>
          
        );
      }
    })
  }, [])

  const selectedCategory = route.params.toyCategory

  const categoryToys = IList.filter((toy) => toy.category === selectedCategory)

  console.log(categoryToys)

  return (
    <FlatList
      data={categoryToys}
      renderItem={({item}) => {
        console.log(item)
        return(
          <TouchableOpacity onPress={() => {navigation.navigate("Details", {toyItem:item})}}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )
      }}
      keyExtractor={(toy) => toy.id.toString()}

    />
  );
};

export default ItemList;