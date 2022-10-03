import React from "react";
import { useParams } from "react-router-dom";
import data from './../data.json';
import Slider from "../components/Layout/slider";
const LocationPage = () => {
    const { id } = useParams();
    const locationData = data.find((location) => location.id === id);
    const { title, pictures, location } = locationData;

	return (
        <div>
          <Slider slides={pictures} />
          <div >
            <div>
              <h1>{title}</h1>
              <p>{location}</p>
            </div>
          </div>
          
        </div>
      );
}

export default LocationPage;