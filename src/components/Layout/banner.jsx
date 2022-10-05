import React from "react";
import styles from '../../styles/banner.module.css'

const Banner = ({image, text, height}) => {
    return(
        <div className={styles.banner} style={{ 
            height: `${height}px`
          }}>
            <img src={image} alt="" className={styles.bannerImg} style={{ 
        height: `${height}px`
      }}/>
            {text ? <p className={styles.bannerText}>{text}</p> : null}
        </div>
    )
}

export default Banner;