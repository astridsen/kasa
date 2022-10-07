import React from "react";
import { useState } from "react";

import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import styles from "../styles/components/slider.module.css";

const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles.sliderWrapper}>
      {slides.map((picture, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img src={picture} alt="" className={styles.sliderPicture} />
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <>
          <div className={styles.arrowLeft} onClick={prevSlide}>
            <img src={arrowLeft} alt="" className={styles.arrowLeftIcon} />
          </div>
          <div className={styles.arrowRight} onClick={nextSlide}>
            <img src={arrowRight} alt="" className={styles.arrowRightIcon} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slideshow;