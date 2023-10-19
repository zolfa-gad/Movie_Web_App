import React from "react";
import imageNotFound from "../../../images/istockphoto-1367855191-612x612.jpg";

const CastCardItem = ({ cast }) => {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center gap-2">
      <img
        className="rounded-circle border shadow "
        src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
        alt=""
        sizes="100%"
        width={"170px"}
        height={"200px"}
        onError={(event) => {
          if (
            event.target.src.includes("null") ||
            event.target.src.includes("undefined")
          ) {
            event.target.src = imageNotFound;
          }
        }}
      />
      <span className="satisfy-font fs-3 text-center">
        {cast.original_name}
      </span>
    </div>
  );
};

export default CastCardItem;
