import Card from "../components/Card/Card";

function Home({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorite
}) {
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
        {console.log(items, cartItems)}
        <div className="d-flex flex-wrap">
            {
              items
              .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item) => (
                <Card 
                  key={item.id}
                  onPlus={(obj) => onAddToCart(obj)}
                  onFavorite={(obj) => onAddToFavorite(obj)}
                  added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                  {... item}
                />
              ))
            }
        </div>
      </div>
    )
}

export default Home;