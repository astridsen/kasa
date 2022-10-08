import React from "react";
import styles from '../styles/components/card.module.css';
import {NavLink} from 'react-router-dom';
import locationList from '../data.json';

const Card = () => {

    return(
        <div className={styles.cardWrapper}>
				{locationList.map(location =>
						<NavLink to={`/location/${location.id}`} key={location.id}>
							<div className={styles.card} key={location.id}>
								<img className={styles.backgroundImage}src={location.cover} alt='location-cover'/>
								<div></div>
								<h3 className={styles.cardText} key={location.id}>{location.title}</h3>
							</div>
						</NavLink>
					)
				}
			</div>
    )
}

export default Card