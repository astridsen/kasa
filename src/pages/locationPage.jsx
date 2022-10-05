import React from "react";
import { useParams } from "react-router-dom";
import data from './../data.json';

import Slideshow from "../components/slideshow";
import Tag from "../components/tag";
import Rating from "../components/rating";
import Host from "../components/host";
import Collapse from "../components/collapse";

import styles from '../styles/pages/locationPage.module.css';
import tagstyles from '../styles/components/tag.module.css';

const LocationPage = () => {
    const { id } = useParams();
    const locationData = data.find((location) => location.id === id);
    const { title, pictures, location, rating, host, description, equipments } = locationData;

	return (
        <main>
          <Slideshow slides={pictures} />
          <div className={styles.contentWrapper}>
            <div className={styles.informations}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.adress}>{location}</p>
              <div className={tagstyles.tagWrapper}>
              {locationData.tags.map((tag, index) => (
                    <Tag key={index} tagTitle={tag} />
                  ))}
                </div>
            </div>
            <div className={styles.ratingAndHost}>
                <Host host={host} />
                <Rating rating={rating} />
            </div>
          </div>
          <div className={styles.locationDetails}>
            <Collapse title="Description" content={description} />
            <Collapse title="Équipements" content={equipments} />
            </div> 
        </main>
      );
}

export default LocationPage;