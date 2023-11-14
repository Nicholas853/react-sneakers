function Drawer({onCloseCart, items = []}) {
    return(
      <div className="overlay">
        <div className="drawer p-30">
          <h2 className="mb-30 d-flex justify-between">
            Кошик
            <img onClick={onCloseCart} className="btnRemove cu-p" src="/img/btn-remove.svg" alt="Remove" />
          </h2>
          

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
                    className="removeBtn"
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
      </div>
    );
}

export default Drawer;