import { StyleSheet, Text, View, FlatList, TouchableOpacity} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useLayoutEffect } from "react";
import ItemContext from "../Context/StoreContext";
import { useContext } from "react";

const ItemList = ({navigation, route}) => {

  const { ListOfToys, deleteToyFn} = useContext(ItemContext);

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
  }, []);

  const selectedCategory = route.params.toyCategory;

  const categoryToys = ListOfToys.filter((toy) => toy.category === selectedCategory);

  //console.log(categoryToys);

  return (
    <FlatList
      data={categoryToys}
      renderItem={({item}) => {
        //console.log(item)
        return(
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => {navigation.navigate("Details", {toyItem:item})}}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
            <View style={styles.delete}>
              <TouchableOpacity onPress={() => {
                                                const delToy = deleteToyFn();
                                                delToy(item.id);
                                                }}>
                <AntDesign name="delete" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )
      }}
      keyExtractor={(toy) => toy.id.toString()}

    />
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    justifyContent: "space-between"

  },
});

export default ItemList;