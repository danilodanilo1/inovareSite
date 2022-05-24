import React, { useState, useEffect } from "react";
// import { SliderData } from '../slider/SliderData';
import Image from "next/dist/client/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides, tamanhoTela }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section
      className="slider"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: tamanhoTela >= 768 ? "column": "row",
      }}
    >
        <FaArrowAltCircleLeft
          className="left-arrow"
          onClick={prevSlide}
          style={{ margin: tamanhoTela >= 768 ? "20px":"0px 10px", cursor: "pointer" }}
        />
      {slides?.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Image
                src={slide.image}
                width={tamanhoTela >= 768 ? "500px" : "200"}
                height={tamanhoTela >= 768 ? "400px" : "150"}
                style={{ borderRadius: "7px" }}
                alt="travel image"
                className="image"
              />
            )}
          </div>
        );
      })}
      <div>
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={nextSlide}
          style={{ margin:tamanhoTela >= 768 ? "20px":"0px 10px", cursor: "pointer" }}
        />
      </div>
    </section>
  );
};

export default ImageSlider;
