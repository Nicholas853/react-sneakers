import React from "react";
import { useState } from "react";
import styles from "./Card.module.scss";

function Card({id, title, imageUrl, price, onPlus, onFavorite, favorited = false }) {
    const[isAdded, setIsAdded] = useState(false)
    const[isFavorite, setIsFavorite] = useState(favorited)

    const onClickPlus = () => {
      onPlus({title, imageUrl, price});
      setIsAdded(!isAdded);
    }
    const onClickFavorite = () => {
      onFavorite({id, title, imageUrl, price});
      setIsFavorite(!isFavorite);
    }

    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
              <img onClick={onClickFavorite} src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Heart"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>{price} грн.</b>
              </div>
              <img className={styles.plus} onClick={onClickPlus} width={32} height={32} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
            </div>
        </div>
    );
}

export default Card;