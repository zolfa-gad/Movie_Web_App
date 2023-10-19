import React from "react";

const NotFoundPage = () => {
  return (
    <div className="vh-100 bg-dark text-light d-flex justify-content-center align-items-center text-center ">
      <div
        className="d-flex flex-column justify-content-center align-items-center "
        style={{ width: "350px" }}
      >
        <span className="fs-4 fw-light">Opps, Page Not Found</span>
        <h1
          className=" fw-bolder text-danger"
          style={{ fontSize: 150, lineHeight: 0.8 }}
        >
          404
        </h1>
        <span className="fs-4 fw-light">
          We Are Sorry But The Page You Requested Was Not Found
        </span>
      </div>
    </div>
  );
};

export default NotFoundPage;
