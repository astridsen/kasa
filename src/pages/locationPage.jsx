import React from "react";
import { useParams } from "react-router-dom";
import data from './../data.json';

import Slider from "../components/Layout/slider";
import Tag from "../components/Layout/tag";
import Rating from "../components/Layout/rating";
import Host from "../components/Layout/host";
import Collapse from "../components/Layout/collapse";

import styles from '../styles/locationPage.module.css';
import tagstyles from '../styles/tag.module.css';

const LocationPage = () => {
    const { id } = useParams();
    const locationData = data.find((location) => location.id === id);
    const { title, pictures, location, rating, host, description, equipments } = locationData;

	return (
        <div>
          <Slider slides={pictures} />
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
        </div>
      );
}

export default LocationPage;