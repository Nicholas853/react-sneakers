function Drawer({onCloseCart, onRemove, items = []}) {
    return(
      <div className="overlay">
        <div className="drawer p-30">
          <h2 className="mb-30 d-flex justify-between">
            Кошик
            <img onClick={onCloseCart} className="btnRemove cu-p" src="/img/btn-remove.svg" alt="Remove" />
          </h2>
          
          {
            items.length ?
              <div className="cart">
                <div className="items">
                  {items.map((obj) =>(
                    <div className="cartItem d-flex align-center mb-20">
                    <div
                      style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className="cartItemImg"></div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} грн.</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="removeBtn cu-p"
                      src="img/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                  ))}
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
              :
              <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                <img className="mb-20" width={120} height={120} src="./img/cart-empty.png" alt="Empty box" />
                <h2>Кошик порожній</h2>
                <p className="opacity-6">Додайте хоча б одну пару кросівок, щоб зробити замовлення.</p>
                <button onClick={onCloseCart} className="greenButton">
                  <img src="/img/arrow.svg" alt="Arrow"/>Повернутись назад
                </button>
              </div>
          }
        </div>
      </div>
    );
}

export default Drawer;