import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../../reusable/CarouselItem/CarouselItem";

const CarouselSection = ({ list, onCarouselChange }) => {
  return (
    <Carousel
      className=" object-fit-cover "
      interval={5000}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      swipeable
      autoPlay
      stopOnHover
      infiniteLoop
      dynamicHeight
      onChange={onCarouselChange}
    >
      {list.map((movie) => (
        <CarouselItem key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
};

export default CarouselSection;
