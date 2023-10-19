import React, { useContext } from "react";
import CarouselSection from "../../components/sections/CarouselSection/CarouselSection";
import MultiListSection from "../../components/reusable/MultiListSection/MultiListSection";
import { DataContext } from "../../context/DataContextStore";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePage = () => {
  let {
    nowPlayingList,
    moviesPopularList,
    moviesTopRatedList,
    moviesUpComingList,
    seriesOnAirList,
    seriesPopularList,
    seriesTopRatedList,
  } = useContext(DataContext);

  return (
    <div className=" bg-dark min-vh-100 ">
      <>
        <CarouselSection
          list={nowPlayingList}
        />
        <MultiListSection
          sectionTitle={"Movies"}
          list1={{ value: moviesPopularList, title: "Popular" }}
          list2={{ value: moviesTopRatedList, title: "Top Rated" }}
          list3={{ value: moviesUpComingList, title: "Upcoming" }}
        />

        <MultiListSection
          sectionTitle={"TV Series"}
          list1={{ value: seriesOnAirList, title: "On The Air" }}
          list2={{ value: seriesPopularList, title: "Popular" }}
          list3={{ value: seriesTopRatedList, title: "Top Rated" }}
        />
      </>
    </div>
  );
};

export default HomePage;
