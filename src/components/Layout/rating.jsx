import React from "react";

import redStar from '../../assets/redStar.svg';
import greyStar from '../../assets/greyStar.svg';

import styles from '../../styles/rating.module.css'

const Rating = ({rating}) => {
    const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.rating}>
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className={styles.ratingIcon}
            src={redStar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className={styles.ratingIcon}
            src={greyStar}
            alt=""
          />
        )
      )}
    </div>
  );
}

export default Rating;