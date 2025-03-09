import { StyleSheet, Text, View, FlatList, TouchableOpacity} from "react-native";

const ToysList = [
  {id: 1, category: 'Action Figures', name: 'Spider-Man', price: 20, desc: '', photo: ''},
  {id: 2, category: 'Action Figures', name: 'Darth Vader', price: 30, desc: '', photo: ''},
  {id: 3, category: 'Action Figures', name: 'Batman', price: 28, desc: '', photo: ''},
  {id: 4, category: 'Action Figures', name: 'Ryu', price: 35, desc: '', photo: ''},
  {id: 5, category: 'Dolls', name: 'Barbie', price: 20, desc: '', photo: ''},
  {id: 6, category: 'Dolls', name: 'American Girl Doll', price: 60, desc: '', photo: ''},
  {id: 7, category: 'Dolls', name: 'Bratz Doll', price: 25, desc: '', photo: ''},
  {id: 8, category: 'Dolls', name: 'L.O.L Surprise Doll', price: 20, desc: '', photo: ''},
  {id: 9, category: 'Plush Toys', name: 'Teddy Bear', price: 25, desc: '', photo: ''},
  {id: 10, category: 'Plush Toys', name: 'Pikachu Plush', price: 25, desc: '', photo: ''},
  {id: 11, category: 'Plush Toys', name: 'Winne the Pooh Plush', price: 20, desc: '', photo: ''},
  {id: 12, category: 'Plush Toys', name: 'Minecraft Creeper Plush', price: 20, desc: '', photo: ''},
  {id: 13, category: 'Vehicles', name: 'Hot Wheel Car', price: 5, desc: '', photo: ''},
  {id: 14, category: 'Vehicles', name: 'Remote Control Monster Truck', price: 20, desc: '', photo: ''},
  {id: 15, category: 'Vehicles', name: 'Thomas & Friends Train Set', price: 30, desc: '', photo: ''},
  {id: 16, category: 'Vehicles', name: 'Die-CAst Airplane Model', price: 25, desc: '', photo: ''},
]
const ItemList = ({navigation, route}) => {
  const selectedCategory = route.params.toyCategory
  const categoryToys = ToysList.filter((toy) => toy.category === selectedCategory)
  console.log(categoryToys)
  return (
    <FlatList
      data={categoryToys}
      renderItem={({item}) => {
        console.log(item)
        return(
          <TouchableOpacity onPress={() => {navigation.navigate('Details')}}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )
      }}
      keyExtractor={(toy) => toy.id.toString()}

    />
  );
};

export default ItemList;