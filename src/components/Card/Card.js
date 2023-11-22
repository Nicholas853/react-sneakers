import React from "react";
import { useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card({
    id, 
    title, 
    imageUrl, 
    price, 
    onPlus, 
    onFavorite, 
    favorited = false, 
    added = false,
    loading = false,
  }) {

    const[isAdded, setIsAdded] = useState(added)
    const[isFavorite, setIsFavorite] = useState(favorited)

    const onClickPlus = () => {
      onPlus({ id, title, imageUrl, price});
      setIsAdded(!isAdded);
    }
    const onClickFavorite = () => {
      onFavorite({id, title, imageUrl, price});
      setIsFavorite(!isFavorite);
    }

    return(
        <div className={styles.card}>
          {loading ? 
              <ContentLoader 
                speed={2}
                width={180}
                height={200}
                viewBox="0 0 160 200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="160" height="91" /> 
                <rect x="0" y="172" rx="8" ry="8" width="80" height="24" /> 
                <rect x="0" y="107" rx="3" ry="3" width="160" height="15" /> 
                <rect x="0" y="126" rx="3" ry="3" width="93" height="15" /> 
                <rect x="122" y="165" rx="8" ry="8" width="32" height="32" />
              </ContentLoader>
            :
            <>
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
            </>
          }
            

          
        </div>
    );
}

export default Card;