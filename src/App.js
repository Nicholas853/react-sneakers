import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const arr = [
    {name: 'Чоловічі Кросівки Nike Blazer Mid Suede', price: 12999 },
    {name: 'Чоловічі Кросівки Nike Air Max 270', price: 12999 },
    {name: 'Чоловічі Кросівки Nike Blazer Mid Suede', price: 8499 },
    {name: 'Кросівки Puma X Aka Boku Future Rider', price: 8999 },
    {name: 'Чоловічі Кросівки Under Armour Curry 8', price: 15199 },
    {name: 'Чоловічі Кросівки Nike Kyrie 7', price: 11299 },
    {name: 'Чоловічі Кросівки Jordan Air Jordan 11', price: 10799  },
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
           <Card />

       </div>
      </div>
    </div>
  );
}

export default App;
