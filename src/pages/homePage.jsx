import React from "react";
import Card from '../components/Layout/card';
import Banner from "../components/Layout/banner";
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