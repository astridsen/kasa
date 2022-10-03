import React from "react";
import { useState } from "react";

//Style
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
          >
            {index === current && (
              <img src={picture} alt="" />
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <>
          <div onClick={prevSlide}>
            <img src={arrowLeft} alt="" />
          </div>
          <div onClick={nextSlide}>
            <img src={arrowRight} alt="" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;