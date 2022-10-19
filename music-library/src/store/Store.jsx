import { createContext, useContext, useState } from "react";
import data from '../library-template.json';

const AppContext = createContext({
  items: [],
  createItem: (item) => { },
  getItem: (id) => { },
  updateItem: (item) => { },
  deleteItem: (item) => { }
})

export default function Store({ children }) {

  const [items, setItems] = useState(data);

  function createItem(item) {
    const temp = [...items];
    temp.push(item);
    setItems(temp);
  }

  function getItem(id) {
    const item = items.find(item => item.id === id);
    return item;
  }

  function updateItem(item) {
    const index = items.findIndex(index => index.id === item.id)
    const temp = [...items];
    temp[index] = { ...item };
  }

  function deleteItem(item) {
    const index = items.findIndex(index => index.id === item.id)
    const temp = [...items];
    temp[index] = null;
    // CHEQUEAR SI ESTA FUNCION FUNCIONA OK
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
        deleteItem
      }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}