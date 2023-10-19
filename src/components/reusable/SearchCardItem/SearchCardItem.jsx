import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import imageNotFound from "../../../images/images.png";
import { DataContext } from "../../../context/DataContextStore";

const SearchCardItem = ({ movie }) => {
  const { onCloseSearchWindow } = useContext(DataContext);

  return (
    <Link to={`/detail/${movie.media_type}/${movie.id}`}>
      <div className="" onClick={onCloseSearchWindow}>
        <figure
          className="m-0 rounded-4 shadow overflow-hidden  "
          style={{ width: "260px", height: "400px" }}
        >
          <img
            alt=""
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            style={{ width: "100%", height: "100%" }}
            className="object-fit-fill rounded-4"
            onError={(event) => {
              if (
                event.target.src.includes("null") ||
                event.target.src.includes("undefined")
              ) {
                event.target.src = imageNotFound;
              }
            }}
          />
        </figure>
      </div>
    </Link>
  );
};

export default SearchCardItem;
