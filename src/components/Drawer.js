function Drawer(props) {
    return(
      <div className="overlay">
        <div className="drawer p-30">
          <h2 className="mb-30 d-flex justify-between">
            Кошик
            <img onClick={props.onCloseCart} className="btnRemove cu-p" src="/img/btn-remove.svg" alt="Remove" />
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
    );
}

export default Drawer;