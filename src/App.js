import React from "react";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import AppContext from "./context";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   async function fetchData() {
     try {
      const [ cartResponse, favoritesResponse, itemsResponse ] = await Promise.all([
        axios.get('https://655358665449cfda0f2e8750.mockapi.io/cart'),
        axios.get('https://6555f3db84b36e3a431eb65b.mockapi.io/favorites'),
        axios.get('https://655358665449cfda0f2e8750.mockapi.io/items')
      ]);

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
     } catch (error) {
      alert("Помилка при запиті даних!");
      console.error(error);
     }
   }

   fetchData(); 
  }, []);
  
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem){
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://655358665449cfda0f2e8750.mockapi.io/cart/${findItem.id}`);
      } else{

        setCartItems(prev => [...prev, obj]);
        const { data } = await axios.post('https://655358665449cfda0f2e8750.mockapi.io/cart', obj);
        setCartItems(prev => prev.map((item) => {
          if(item.parentId === data.parentId){
            return{
              ...item,
              id: data.id
            }
          } else{
            return item;
          }
        }));
      }
    } catch (error) {
      alert("Помилка при додаванні товару у кошик!");
      console.error(error);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
      await axios.delete(`https://655358665449cfda0f2e8750.mockapi.io/cart/${id}`);
    } catch (error) {
      alert("Помилка при видаленні товару з кошика!");
      console.error(error);
    } 
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))){
        axios.delete(`https://6555f3db84b36e3a431eb65b.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else{
        const { data } = await axios.post('https://6555f3db84b36e3a431eb65b.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не вдалося додати в уподобані');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
     setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };



  return (
   <AppContext.Provider value={{
      items, 
      cartItems, 
      favorites, 
      onAddToFavorite, 
      onAddToCart,
      isItemAdded, 
      setCartOpened, 
      setCartItems
    }}>
     <div className="wrapper clear">
      <Drawer 
        items={cartItems}
        onCloseCart={() => setCartOpened(false)}
        onRemove={onRemoveItem}
        opened={cartOpened}
      />
      
      <Header 
        onClickCart={() => setCartOpened(true)}
      />
     <Routes>
      <Route 
        path="" 
        element={
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            isLoading={isLoading}
          />
        } 
      />
      <Route 
        path="favorites" 
        element={
          <Favorites />
        } 
      />
      <Route 
        path="orders" 
        element={
          <Orders />
        } 
      />
    </Routes>

    </div>
   </AppContext.Provider>
  );
}

export default App;
