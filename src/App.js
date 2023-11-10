/* eslint-disable jsx-a11y/alt-text */
function App() {
  return (
    <div className="wrapper clear">
      <div style={{display: 'none'}} className="overlay">
        <div className="drawer p-30">
          <h2 className="mb-30 d-flex justify-between">
            Кошик
            <img className="btnRemove cu-p" src="/img/btn-remove.svg" alt="Remove" />
          </h2>
          

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div 
                style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} 
                className="cartItemImg"
              >
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
                <b>12 999 грн.</b>
              </div>
              <img className="btnRemove" src="/img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div 
                style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}} 
                className="cartItemImg"
              >
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
                <b>12 999 грн.</b>
              </div>
              <img className="btnRemove" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Всього:</span>
                <div></div>
                <b>21 498 грн.</b>
              </li>
              <li className="d-flex">
                <span>Податок 5%</span>
                <div></div>
                <b>1074 грн</b>
              </li>
            </ul>
            <button className="greenButton">Оформити замовлення  <img src="/img/arrow.svg" alt="Arrow" /></button>
          </div>
        </div>
      </div>


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
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>
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
