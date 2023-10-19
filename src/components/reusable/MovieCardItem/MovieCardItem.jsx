import React, { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import { LuLanguages } from "react-icons/lu";
import { Link } from "react-router-dom";
import IconTextLabelItem from "../IconTextLabelItem/IconTextLabelItem";
import styles from "./MovieCardItem.module.css";

const MovieCardItem = ({ movie, type }) => {
  useEffect(() => {
    console.log(type, "card");
  }, [type]);

  return (
    <Link
      to={`/detail/${type === "Movies" ? "movie" : "tv"}/${movie.id}`}
      replace={true}
    >
      <div className="position-relative">
        <figure
          className="m-0 rounded-4 shadow overflow-hidden  "
          style={{ width: "260px", height: "400px" }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
            style={{ width: "100%", height: "100%" }}
            className="object-fit-fill rounded-4"
          />
        </figure>

        <div
          className={`${styles.movieCardLabel} rounded-bottom-4 p-2`}
          style={{ width: "260px" }}
        >
          <div className="d-flex justify-content-between align-items-center  ">
            <IconTextLabelItem
              text={movie.vote_average}
              icon={<BsStarFill size={25} className="pb-1 " />}
              color={"yellow"}
            />
            <IconTextLabelItem
              text={Math.round(movie.popularity)}
              icon={<VscEye size={25} />}
            />
            <IconTextLabelItem
              text={movie.original_language}
              icon={<LuLanguages size={25} />}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCardItem;
