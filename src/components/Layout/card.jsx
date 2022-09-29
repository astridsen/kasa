import React from "react";
import styles from '../../styles/card.module.css';
import locationList from '../../data.json';

const Card = () => {
    return (
        <div>
        <ul className={styles.cardWrapper}>
            {locationList.map((location) => (
                <li key={`${location.id}-${location.index}`} className={styles.card} style={{backgroundImage: `url(${location.cover})`, backgroundSize: 'cover'}}><p className={styles.cardText}>{location.title}</p></li>
            ))}
        </ul>
        </div>
    )
}

/*const Card = () => {
    return(
        <div className={styles.cardContenair}>
        
            <div className={styles.card}>
                <p>{DisplayData.title}</p>
            </div>
        </div>
        </div>
    )
}*/

export default Card;