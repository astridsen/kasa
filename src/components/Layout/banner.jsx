import React from "react";
import styles from '../../styles/banner.module.css'

const Banner = ({image, text}) => {
    return(
        <div className={styles.banner}>
            <img src={image} alt="" className={styles.bannerImg} />
            {text ? <p className={styles.bannerText}>{text}</p> : null}
        </div>
    )
}

export default Banner;