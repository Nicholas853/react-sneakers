import React from "react";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
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

  useEffect(() => {
    axios.get('https://655358665449cfda0f2e8750.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://655358665449cfda0f2e8750.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://6555f3db84b36e3a431eb65b.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);
  
  const onAddToCart = (obj) => {
    axios.post('https://655358665449cfda0f2e8750.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]) 
  }  

  const onRemoveItem = (id) => {
    axios.delete(`https://655358665449cfda0f2e8750.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id)) 
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)){
        axios.delete(`https://6555f3db84b36e3a431eb65b.mockapi.io/favorites/${obj.id}`);
      } else{
        const { data } = await axios.post('https://6555f3db84b36e3a431eb65b.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не вдалося додати в уподобані');
    }
  }

  const onChangeSearchInput = (event) => {
     setSearchValue(event.target.value);
  }



  return (
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
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
          />
        } 
      />
      <Route 
        path="/favorites" 
        element={
          <Favorites 
            items={favorites}
            onAddToFavorite={onAddToFavorite}
          />
        } 
      />
    </Routes>

    </div>
  );
}

export default App;
