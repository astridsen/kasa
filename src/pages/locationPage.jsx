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
              <p className={styles.location}>{location}</p>
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

/*const SingleProduct = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);
    const { title, location, rating, host, equipments, description, pictures } =
      product;
  
    return (
      <div className="singleproduct">
        <Slider slides={pictures} />
        <div className="singleproduct__content">
          <div className="singleproduct__informations">
            <h1 className="singleproduct__title">{title}</h1>
            <p className="singleproduct__location">{location}</p>
            <div className="singleproduct__tags">
              {product.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="singleproduct__rating-and-host">
            <Rating rating={rating} />
            <Server host={host} />
          </div>
        </div>
        <div className="singleproduct__dropdowns">
          <Collapse title="description" content={description} />
          <Collapse title="équipement" content={equipments} />
        </div>
      </div>
    );
  };
  
  export default SingleProduct;*/