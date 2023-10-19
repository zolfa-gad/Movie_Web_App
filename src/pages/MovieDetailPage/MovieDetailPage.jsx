import React, { useContext, useEffect, useState } from "react";
import styles from "./MovieDetailPage.module.css";
import IconTextLabelItem from "../../components/reusable/IconTextLabelItem/IconTextLabelItem";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import CastCardItem from "../../components/reusable/CastCardItem/CastCardItem";
import { DataContext } from "../../context/DataContextStore";
import { useParams } from "react-router-dom";
import { BsCalendarDate, BsStarFill } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import { LuLanguages } from "react-icons/lu";
import { BiSolidVideos, BiTimeFive } from "react-icons/bi";
import { PiFilmReelFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieDetailPage = () => {
  const { id, type } = useParams();

  const { getDataFromAPI } = useContext(DataContext);

  const [movie, setMovieData] = useState({});
  const [castList, setCastData] = useState([]);

  const iconData = [
    {
      icon: <BsStarFill size={25} className="pb-1 " />,
      text: `${movie.rate}`,
      color: "#ffc107",
    },

    {
      icon: <BiTimeFive size={27} />,
      text: movie.duration !== undefined ? `${movie.duration}m` : "",
    },

    { icon: <LuLanguages size={27} />, text: `${movie.language}` },

    { icon: <VscEye size={27} />, text: `${movie.popularity}` },

    movie.episodesNumber !== undefined
      ? {
          icon: <BiSolidVideos size={25} className="pb-1 " />,
          text: `${movie.episodesNumber}`,
          color: "#ffc107",
        }
      : "",

    movie.seasonsNumber !== undefined
      ? {
          icon: <PiFilmReelFill size={25} className="pb-1 " />,
          text: `${movie.seasonsNumber}`,
          color: "#ffc107",
        }
      : "",
    {
      icon: <BsCalendarDate size={27} />,
      text: `${new Date(movie.date).toDateString()}`,
    },
  ];

  useEffect(() => {
    console.log(id, "id");
    console.log(type, "type");

    getDataFromAPI(`https://api.themoviedb.org/3/${type}/${id}`).then(
      (data) => {
        let item;
        if (type === "movie") {
          item = {
            id: data.id,
            title: data.original_title,
            overview: data.overview,
            rate: data.vote_average,
            duration: data.runtime,
            date: data.release_date,
            popularity: data.popularity,
            language: data.original_language,
            categories: data.genres,
            poster: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
          };
        } else {
          item = {
            id: data.id,
            title: data.original_name,
            overview: data.overview,
            rate: data.vote_average,
            duration: data.episode_run_time[0],
            date: data.first_air_date,
            popularity: data.popularity,
            language: data.original_language,
            categories: data.genres,
            poster: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
            episodesNumber: data.number_of_episodes,
            seasonsNumber: data.number_of_seasons,
          };
        }
        setMovieData(item);
      }
    );

    getDataFromAPI(`https://api.themoviedb.org/3/${type}/${id}/credits`).then(
      (data) => setCastData(data.cast.slice(0, 15))
    );
  }, [id]);

  return (
    <div
      className="h-100"
      style={{
        backgroundImage: `url(${movie.poster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.movieDetail} h-100 w-100  p-2 text-light `}>
        <div className="w-100 " style={{ height: "70px" }} />

        <Container
          className={`${styles.container}  h-100 py-2 p-lg-3 rounded-2 gap-3 d-flex flex-column justify-content-center align-items-center `}
        >
          <div
            className={`${styles.detail} h-100 py-2 rounded-2 gap-3 d-flex `}
          >
            <figure
              className=" shadow rounded-3 m-0 col-lg-6"
              style={{ height: "60%" }}
            >
              <img
                className=" rounded-3 "
                style={{ height: "100%", width: "100%", opacity: "1" }}
                src={movie.poster}
                alt=""
              />
            </figure>

            <Col
              md={6}
              className=" d-flex flex-column justify-content-center align-items-start p-md-3"
            >
              <h2
                className=" m-0 w-100 fs-1 fw-bolder croissant-font p-2 "
                style={{ color: "#ffc107" }}
              >
                {movie.title}
              </h2>

              <section className="px-2 pb-2">
                <div className="d-flex flex-wrap align-items-sm-center justify-content-sm-start justify-content-center align-items-center   gap-3 fst-italic py-3  text-md-start list-unstyled">
                  {movie.categories?.map(({ name }, index) => (
                    <li
                      key={`genre-${index}`}
                      className="p-1 px-2 rounded-2 fs-5"
                      style={{ border: "1px solid #ffc107" }}
                    >
                      {name}
                    </li>
                  ))}
                </div>

                <p className=" text-md-start fs-5 fw-light ">
                  {movie.overview}
                </p>

                <div className="d-flex flex-wrap justify-content-between align-items-center gap-lg-3 gap-md-1 gap-sm-0 pe-lg-5">
                  {iconData.map((item, index) => (
                    <IconTextLabelItem
                      key={`icon-text-${index}`}
                      icon={item.icon}
                      text={item.text}
                      color={item.color}
                    />
                  ))}
                </div>
              </section>
            </Col>
          </div>
          <div className="w-100 ">
            <Swiper
              className="w-100 d-flex flex-column justify-content-start align-items-center gap-3 p-3 rounded-2 shadow bg-dark-opacity"
              modules={[Navigation, Scrollbar]}
              freeMode={false}
              spaceBetween={10}
              centerInsufficientSlides={true}
              loop={false}
              slidesOffsetAfter={0}
              centeredSlides={true}
              breakpoints={{
                0: {
                  width: 200,
                  spaceBetween: 10,
                },
                320: {
                  width: 200,
                  spaceBetween: 10,
                },
                480: {
                  width: 200,
                  spaceBetween: 10,
                },
                640: {
                  width: 200,
                  spaceBetween: 10,
                },
                768: {
                  width: 200,
                  spaceBetween: 10,
                },
                992: {
                  width: 200,
                  spaceBetween: 10,
                },
                1200: {
                  width: 200,
                  spaceBetween: 10,
                },
                1400: {
                  width: 200,
                  spaceBetween: 10,
                },
              }}
              scrollbar={{ draggable: true }}
            >
              {castList?.map((item) => (
                <SwiperSlide key={item.cast_id}>
                  <CastCardItem cast={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MovieDetailPage;
