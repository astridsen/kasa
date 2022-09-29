import React from "react";
import Header from "../components/Layout/header";
import Footer from "../components/Layout/footer";
import Card from '../components/Layout/card'

import styles from '../styles/banner.module.css';

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className={styles.banner}>
                <p className={styles.bannerText}>Chez vous, partout et ailleurs</p>
            </div>
            <Card />
            <Footer />
        </div>
    )
}

export default HomePage;