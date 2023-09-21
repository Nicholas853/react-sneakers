function App() {
  return (
    <div className="wrapper">
      <header className="d-flex">
        <img width={40} height={40} src="/img/logo.png"/>
        <div className="headerLeft">
          <svg />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul >
          <li>
          <img width={18} height={18} src="/img/cart.svg"/>           
           <span>1205 грн.</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg"/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>
          Всі кросівки
        </h1>
      </div>
    </div>
  );
}

export default App;
