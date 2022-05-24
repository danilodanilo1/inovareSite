import React, { useState, useEffect } from 'react';
// import { SliderData } from '../slider/SliderData';
import Image from 'next/dist/client/image';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
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
    <section className='slider' style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      {slides?.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Image src={slide.image} width="500px" height="400px" style={{ borderRadius:"7px"}} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
      <div>

      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} style={{margin:"20px", cursor:"pointer"}} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} style={{margin:"20px", cursor:"pointer"}}/>
      </div>
    </section>
  );
};

export default ImageSlider;
