import { Link } from 'react-router-dom';
import Card from "../components/Card/Card";

function Favorites({ items, onAddToFavorite }) {
    return (
        <div className="content p-40">
        {items.length ?
        <div>
          <div className= "mb-40 d-flex align-center justify-between">
            <h1>
              Мої уподобання
            </h1>
          </div>

          <div className="d-flex flex-wrap">
          {
            items.map((item) => (
              <Card 
                key={item.id}
                favorited={true}
                onFavorite={onAddToFavorite}
                {... item} // Конкатинація - спосіб, при якому всі значення item передаються. Краще використовувати замість того, щоб вручну прописувати title={obj.title} і т.д.ы
                // onPlus={(obj) => onAddToCart(obj)}
                // onFavorite={(obj) => onAddToFavorite(obj)}
              />   
              ))
            }    
          </div>
        </div> 
        :
        <div className="favoritesEmpty d-flex align-center justify-center flex-column flex">
          <img width={70} height={70} src="./img/favorites-empty.png" alt="Empty box" />
          <h2>Уподобаних кросівок немає</h2>
          <p>Ви нічого не додавали в уподобане</p>
          <Link to={'/'}>
            <button className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow"/>Повернутись назад
            </button>
          </Link>
        </div>
        }
      </div>
    )
}

export default Favorites;