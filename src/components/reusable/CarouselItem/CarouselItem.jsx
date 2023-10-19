import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { BsCalendarDate, BsStarFill } from "react-icons/bs";
import IconTextLabelItem from "../IconTextLabelItem/IconTextLabelItem";
import { Link } from "react-router-dom";
import styles from "./CarouselItem.module.css";

const CarouselItem = ({ movie }) => {
  console.log(movie, "movie");
  console.log(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);

  return (
    <div className={styles.moviePosterCard}>
      <figure className="h-100 m-0">
        <img
          className="h-100 object-fit-cover "
          style={{ opacity: "0.5" }}
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=""
        />
      </figure>

      <div
        className={` ${styles.moviePoster} p-2 text-light `}
        style={{ height: "90%" }}
      >
        <Container className={`h-100   gap-3 ${styles.container}`}>
          <Link
            className={`${styles.movieImg}  shadow rounded-3 m-0`}
            style={{ opacity: "1" }}
            to={`detail/movie/${movie.id}`}
          >
            <img
              className=" object-fit-cover rounded-3 "
              style={{ height: "100%", width: "100%", opacity: "1" }}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          </Link>

          <Col
            md={6}
            className=" justify-content-start align-items-start p-md-3"
          >
            <h2 className="fs-2 fw-bolder croissant-font text-md-start">
              {movie.original_title}
            </h2>

            <section className="px-2 pb-2">
              <div className="d-flex flex-wrap align-items-sm-center justify-content-sm-start justify-content-center align-items-center   gap-3 fst-italic py-2  text-md-start">
                {movie.genre_ids.map((item, index) => (
                  <li
                    key={`genre-${index}`}
                    className="p-1 px-2 border border-opacity-100 rounded-2"
                  >
                    {item}
                  </li>
                ))}
              </div>

              <p
                className={`h-100 text-md-start fw-light ${styles.movieOverview}`}
              >
                {movie.overview}
              </p>

              <div className="d-flex justify-content-between align-items-center  ">
                <IconTextLabelItem
                  icon={<BsStarFill size={25} className="pb-1 " />}
                  text={movie.vote_average}
                  color={"#ffc107"}
                />
                <IconTextLabelItem
                  icon={<BsCalendarDate size={27} />}
                  text={new Date(movie.release_date).toDateString()}
                  width={"200px"}
                />
              </div>
            </section>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default CarouselItem;
