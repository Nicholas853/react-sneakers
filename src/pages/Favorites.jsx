import React from "react";
import Card from "../components/Card/Card";
import { Link } from 'react-router-dom';
import AppContext from "../context";
import { useContext } from 'react';

function Favorites() {
    const {favorites, onAddToFavorite, onAddToCart} = useContext(AppContext);

    return (
        <div className="content p-40">
        {favorites.length ?
        <div>
          <div className= "mb-40 d-flex align-center justify-between">
            <h1>
              Мої уподобання
            </h1>
          </div>

          <div className="d-flex flex-wrap">
          {
            favorites.map((item) => (
              <Card 
                key={item.id}
                favorited={true}
                onFavorite={onAddToFavorite}
                onPlus={(obj) => onAddToCart(obj)}

                {... item} // Конкатинація - спосіб, при якому всі значення item передаються. Краще використовувати замість того, щоб вручну прописувати title={obj.title} і т.д.ы
              />   
              ))
            }    
          </div>
        </div> 
        :
        <div className="favoritesEmpty d-flex align-center justify-center flex-column flex">
          <img width={70} height={70} src="img/favorites-empty.png" alt="Empty box" />
          <h2>Уподобаних кросівок немає</h2>
          <p>Ви нічого не додавали в уподобане</p>
          <Link to={''}>
            <button className="greenButton">
              <img src="img/arrow.svg" alt="Arrow"/>Повернутись назад
            </button>
          </Link>
        </div>
        }
      </div>
    )
}

export default Favorites;