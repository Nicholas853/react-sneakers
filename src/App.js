/* eslint-disable jsx-a11y/alt-text */
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img className="mr-10" width={18} height={18} src="/img/cart.svg"/>           
            <span>1205 грн.</span>
          </li>
          <li className="mr-10">
            <img width={18} height={18} src="/img/user.svg"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>
          Всі кросівки
        </h1>
      </div>
    </div>
  );
}

export default App;
