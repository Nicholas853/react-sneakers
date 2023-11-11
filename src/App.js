import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const arr = [
    {
      title: 'Чоловічі Кросівки Nike Blazer Mid Suede', 
      price: 12999,
      imageUrl: "/img/sneakers/1.jpg"
    },
    {
      title: 'Чоловічі Кросівки Nike Air Max 270', 
      price: 12999,
      imageUrl: "/img/sneakers/2.jpg"
    },
    {
      title: 'Чоловічі Кросівки Nike Blazer Mid Suede', 
      price: 8499,
      imageUrl: "/img/sneakers/3.jpg"
    },
    {
      title: 'Кросівки Puma X Aka Boku Future Rider', 
      price: 8499,
      imageUrl: "/img/sneakers/4.jpg"
    },
    
   
  ]


  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header />

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

       <div className="d-flex justify-between">
          {
            arr.map((obj) => (
              <Card 
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClick={console.log(obj)}
              />
            ))
          }
       </div>
      </div>
    </div>
  );
}

export default App;
