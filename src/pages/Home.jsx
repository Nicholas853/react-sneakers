import { useContext } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

function Home({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorite,
    isLoading,
}) {
    const renderItems = () => {
      const skeletonArray = Array.from({ length: 8 }, (_, index) => ({
        id: index + 1, 
      }));

      const filtredItems = items.filter((item) => 
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      return  (isLoading ? skeletonArray : filtredItems).map((item) => (
        <Card 
          key={item.id}
          onPlus={(obj) => onAddToCart(obj)}
          onFavorite={(obj) => onAddToFavorite(obj)}
          added={isItemAdded(item && item.id)}
          loading={isLoading}
          {... item}
        />
      ));
    };

    const {isItemAdded} = useContext(AppContext);

    return (
      <div className="content p-40">
        <div className= "mb-40 d-flex align-center justify-between">
          <h1>
            {searchValue ? `Пошук по запиту: "${searchValue}"` : 'Всі кросівки'}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue("")} className="clear btnRemove cu-p" src="/img/btn-remove.svg" alt="Close" />}
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Пошук..."/>
          </div>
        </div> 

        <div className="d-flex flex-wrap">
            { renderItems() }
        </div>
      </div>
    )
}

export default Home;