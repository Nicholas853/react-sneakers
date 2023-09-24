/* eslint-disable jsx-a11y/alt-text */
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"/>
          <div className="ml-15">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
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


       <div className="d-flex justify-between">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg"/>
            <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>3 999 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg"/>
            <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>3 999 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg"/>
            <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>3 999 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg"/>
            <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>3 999 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"/>
              </button>
            </div>
          </div>
       </div>
      </div>
    </div>
  );
}

export default App;
