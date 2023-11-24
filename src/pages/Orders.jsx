import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { Link } from 'react-router-dom';
import AppContext from "../context";
import { useContext } from 'react';
import axios from "axios";

function Orders() {
    const { isItemAdded } = useContext(AppContext);
    const [orders, setOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    const skeletonArray = Array.from({ length: 8 }, (_, index) => ({
        id: index + 1, 
    }));

    useEffect(() => {
        // Самовикликуюча функція ()()
        ( async () => {
            try {
                setIsLoading(true);
                const {data} = await axios.get('https://6555f3db84b36e3a431eb65b.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Помилка при запиті замовлень')
                console.error(error);
            }
        })();
    }, []);

    return (
        <div className="content p-40">
        {/* { orders.length ? */}
            <div>
                <div className= "mb-40 d-flex align-center justify-between">
                    <h1>
                        Мої покупки
                    </h1>
                </div>

                <div className="d-flex flex-wrap">
                {   
                    (isLoading ? skeletonArray : orders).map((item) => (
                        <Card 
                            key={item.id}
                            added={isItemAdded(item && item.id)}
                            loading={isLoading}

                            {... item} // Конкатинація - спосіб, при якому всі значення item передаються. Краще використовувати замість того, щоб вручну прописувати title={obj.title} і т.д.ы
                        />   
                    ))
                    }    
                </div>
            </div> 
            {/* : */}
            {/* <div className="favoritesEmpty d-flex align-center justify-center flex-column flex">
                <img width={70} height={70} src="img/orders-empty.png" alt="Empty box" />
                <h2>У вас немає замовлення</h2>
                <p>Оформіть хоча б одне замовлення.</p>
                <Link to={'/'}>
                    <button className="greenButton">
                    <img src="img/arrow.svg" alt="Arrow"/>Повернутись назад
                    </button>
                </Link>
            </div> */}
        {/* }  */}
      </div>
    )
}

export default Orders;