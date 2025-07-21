// PromoCarousel.jsx
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// import "./PromoCarousel.scss"; // подключим стили

import promo1 from "../images/promoCarusel1.png"; 
const PromoCarousel = () => {
  return (
    <div className="promo-carousel-wrapper">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={3}
        visibleSlides={1}
        infinite
        isIntrinsicHeight
      >
        <Slider>
          <Slide index={0}>
            <div className="promo-slide">
              <img src={promo1} alt="promo" />
            </div>
          </Slide>
          <Slide index={1}>
            <div className="promo-slide">
              <img src={promo1} alt="promo" />
            </div>
          </Slide>
          <Slide index={2}>
            <div className="promo-slide">
              <img src={promo1} alt="promo" />
            </div>
          </Slide>
        </Slider>
        <div className="promo-buttons">
          <ButtonBack>&lt;</ButtonBack>
          <ButtonNext>&gt;</ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default PromoCarousel;
