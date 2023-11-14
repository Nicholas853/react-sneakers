import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://655358665449cfda0f2e8750.mockapi.io/items')
    .then(res => {
      return res.json()
    })
    .then(json => {
      setItems(json)
    });
  }, []);
  
  const onAddToCart = (obj) => {
   setCardItems(prev => [...prev, obj]) 
  }


  return (
    <div className="wrapper clear">
      {cartOpened && 
        <Drawer 
          onCloseCart={() => setCartOpened(false)}
          items={cardItems}
        />
      }
      
      <Header 
        onClickCart={() => setCartOpened(true)}
      />

      <div className="content p-40">
        <div className= "mb-40 d-flex align-center justify-between">
          <h1>
            Всі кросівки
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Пошук..."/>
          </div>
        </div>

       <div className="d-flex flex-wrap">
          {
            items.map((item) => (
              <Card 
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
          }
       </div>
      </div>
    </div>
  );
}

export default App;
