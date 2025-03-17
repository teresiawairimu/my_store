import { createContext, useReducer } from "react";

const ItemContext = createContext();

const ItemTypes = ['Action Figures', 'Dolls', 'Plush Toys', 'Vehicles']

const ItemList = [
  {id: 1, category: 'Action Figures', name: 'Spider-Man', price: 20, desc: 'Marvel'},
  {id: 2, category: 'Action Figures', name: 'Darth Vader', price: 30, desc: 'Star Wars'},
  {id: 3, category: 'Action Figures', name: 'Batman', price: 28, desc: 'DC Comics'},
  {id: 4, category: 'Action Figures', name: 'Ryu', price: 35, desc: 'Street Fighter'},
  {id: 5, category: 'Dolls', name: 'Barbie', price: 20, desc: 'Mattel'},
  {id: 6, category: 'Dolls', name: 'American Girl Doll', price: 60, desc: 'American Girl'},
  {id: 7, category: 'Dolls', name: 'Bratz Doll', price: 25, desc: 'MGA Entertainment'},
  {id: 8, category: 'Dolls', name: 'L.O.L Surprise Doll', price: 20, desc: 'MGA Entertainment'},
  {id: 9, category: 'Plush Toys', name: 'Teddy Bear', price: 25, desc: 'Classic Plush Toy'},
  {id: 10, category: 'Plush Toys', name: 'Pikachu Plush', price: 25, desc: 'Pokemon'},
  {id: 11, category: 'Plush Toys', name: 'Winne the Pooh Plush', price: 20, desc: 'Disney'},
  {id: 12, category: 'Plush Toys', name: 'Minecraft Creeper Plush', price: 20, desc: 'Minecraft'},
  {id: 13, category: 'Vehicles', name: 'Hot Wheel Car', price: 5, desc: '', photo: 'Mattel'},
  {id: 14, category: 'Vehicles', name: 'Remote Control Monster Truck', price: 20, desc: 'RC Vehicle'},
  {id: 15, category: 'Vehicles', name: 'Thomas & Friends Train Set', price: 30, desc: 'Fisher-Price'},
  {id: 16, category: 'Vehicles', name: 'Die-Cast Airplane Model', price: 25, desc: 'Various Brands'},
]

const reducer = (toyList, action) => {
  switch(action.type) {
    case "add_toy":
      return [...ItemList, action.payload];

    case "edit_toy":
      return toyList.map((toy) => toy.id === action.payload.id ? action.payload : toy);

    case "delete_toy":
      return toyList.filter((toy) => toy.id !== action.payload);

    default:
      return toyList;
  }
};

export const ItemProvider= (props) => {
  console.log(props);
  const [toyArray, dispatch] = useReducer(reducer, ItemList);

  function addToyHandler() {
    return addToy = (newToy) => {
      dispatch({type: "add_toy", payload: newToy});
    }
  };

  function deleteToyHandler() {
    return deleteToy = (toy_id) => {
      dispatch({type: "delete_toy", payload: toy_id});
    }
  };


  function editToyHandler() {
    return editToy = (updatedToy) => {
      dispatch({type: "edit_toy", payload: updatedToy});
    }
  };

  return (
    <ItemContext.Provider value={{Categories: ItemTypes, 
                                  ListOfToys: toyArray, 
                                  addToyFn: addToyHandler,
                                  deleteToyFn: deleteToyHandler,
                                  editToyFn: editToyHandler
                                  }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContext;