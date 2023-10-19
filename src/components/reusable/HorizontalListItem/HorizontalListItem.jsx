import React from "react";
import MovieCardItem from "../MovieCardItem/MovieCardItem";
import ButtonItem from "../ButtonItem/ButtonItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HorizontalListItem = ({ list, title, section, onViewMoreClick }) => {
  return (
    <section className="text-light d-flex flex-column justify-content-center align-items-center  w-100 gap-3 ">
      <div>
        <h2 className="satisfy-font align-self-center py-3">{title}</h2>
      </div>

      <Swiper
        className=" d-flex justify-content-start align-items-center gap-3 w-100 p-3 rounded-2 shadow bg-dark-opacity"
        modules={[Navigation, Scrollbar]}
        breakpoints={{
          0: {
            width: 300,
            spaceBetween: 10,
          },
          320: {
            width: 300,
            spaceBetween: 10,
          },
          480: {
            width: 300,
            spaceBetween: 10,
          },
          640: {
            width: 300,
            spaceBetween: 10,
          },
          768: {
            width: 300,
            spaceBetween: 10,
          },
          992: {
            width: 300,
            spaceBetween: 10,
          },
          1200: {
            width: 300,
            spaceBetween: 10,
          },
          1400: {
            width: 300,
            spaceBetween: 10,
          },
        }}
        scrollbar={{ draggable: true }}
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCardItem movie={item} type={section} />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <ButtonItem
            text={"View More"}
            className={"border-0 btn-outline-warning "}
            style={{ width: "260px", height: "400px" }}
            onClick={onViewMoreClick}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HorizontalListItem;
