import React from "react";
import Card from '../components/card';
import Banner from "../components/banner";
import data from '../data.json';
import imageBanner from '../assets/homeBackground.png';

const HomePage = () => {
    return (
        <div>
            <Banner image={imageBanner} text="Chez vous, partout et ailleurs"/>
            <Card data={data} />
        </div>
    )
}

export default HomePage;