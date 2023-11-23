import { useState } from "react";
import axios from 'axios';

import Info from "../Info";
import { useCart } from "../../hooks/useCart";

import styles from "./Drawer.module.scss"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onCloseCart, onRemove, items = [], opened }) {
    const { cartItems, setCartItems, totalPrice} = useCart(); 
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);




    const onClickOrder = async () => {
      try {
        setIsLoading(true);
        const {data} = await axios.post('https://6555f3db84b36e3a431eb65b.mockapi.io/orders', {
          items: cartItems,
        });
        setOrderId(data.id)
        setIsOrderComplete(true);
        setCartItems([]);

        for (let i = 0; i < cartItems.length; i++) {
          const item = cartItems[i];
          await axios.delete('https://655358665449cfda0f2e8750.mockapi.io/cart/' + item.id)
          await delay(1000);
        }
      } catch (error) {
        alert('Помилка при створенні замовлення!')
      }
      setIsLoading(false);
    }

    return(
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        <div className={`${styles.drawer} p-30`}>
          <h2 className="mb-30 d-flex justify-between">
            Кошик
            <img onClick={onCloseCart} className="btnRemove cu-p" src="/img/btn-remove.svg" alt="Remove" />
          </h2>
          
          {
            items.length ?
              <div className="cart">
                <div className="items">
                  {items.map((obj) =>(
                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
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
                      <b>{totalPrice} грн.</b>
                    </li>
                    <li className="d-flex">
                      <span>Податок 5%</span>
                      <div></div>
                      <b>{Math.round(totalPrice * 0.05)} грн.</b>
                    </li>
                  </ul>
                  <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформити замовлення  <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
              </div>
              :
              <Info 
                title={isOrderComplete ? "Замовлення оформлено!" : "Кошик порожній"}
                image={isOrderComplete ? "./img/complete-order.png" : "./img/cart-empty.png"}
                description={isOrderComplete ? `Ваше замовлення #${orderId} скоро буде передано кур'єрській доставці` : "Додайте хоча б одну пару кросівок, щоб зробити замовлення."}
              />
          }
        </div>
      </div>
    );
}

export default Drawer;