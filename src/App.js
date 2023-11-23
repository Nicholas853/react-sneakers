import React from "react";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import AppContext from "./context";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   async function fetchData() {
     const cartResponse = await axios.get('https://655358665449cfda0f2e8750.mockapi.io/cart');
     const favoritesResponse = await axios.get('https://6555f3db84b36e3a431eb65b.mockapi.io/favorites');
     const itemsResponse = await axios.get('https://655358665449cfda0f2e8750.mockapi.io/items');

     setIsLoading(false);

     setCartItems(cartResponse.data);
     setFavorites(favoritesResponse.data);
     setItems(itemsResponse.data);
   }

   fetchData();
  }, []);
  
  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))){
        axios.delete(`https://655358665449cfda0f2e8750.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else{
        axios.post('https://655358665449cfda0f2e8750.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
      }
    } catch (error) {
      
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://655358665449cfda0f2e8750.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id)) 
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
    }
  };

  const onChangeSearchInput = (event) => {
     setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };



  return (
   <AppContext.Provider value={{items, cartItems, favorites, onAddToFavorite, onAddToCart, isItemAdded, setCartOpened, setCartItems}}>
     <div className="wrapper clear">
      {cartOpened && 
        <Drawer 
          onCloseCart={() => setCartOpened(false)}
          items={cartItems}
          onRemove={onRemoveItem}
        />
      }
      
      <Header 
        onClickCart={() => setCartOpened(true)}
      />
     <Routes>
      <Route 
        path="/" 
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
        path="/favorites" 
        element={
          <Favorites />
        } 
      />
    </Routes>

    </div>
   </AppContext.Provider>
  );
}

export default App;
