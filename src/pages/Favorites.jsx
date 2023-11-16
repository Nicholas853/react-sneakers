import Card from "../components/Card/Card";
function Favorites({ items, onAddToFavorite }) {
    return (
        <div className="content p-40">
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
    )
}

export default Favorites;