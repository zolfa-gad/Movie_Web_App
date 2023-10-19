import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";

const PaginationItem = ({ onPageChange }) => {
  return (
    <div className="w-100 position-sticky bottom-0 bg-dark d-flex justify-content-center align-items-center p-2 ">
      <ReactPaginate
        pageCount={500}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        previousLabel={<IoIosArrowBack size={20} />}
        nextLabel={<IoIosArrowForward size={20} />}
        breakLabel={<BsThreeDots size={20} />}
        previousLinkClassName="btn btn-warning p-2 text-decoration-none "
        nextLinkClassName="btn btn-warning p-2 text-decoration-none"
        breakClassName="p-2 text-light"
        pageClassName="btn btn-outline-light border-0 p-2 "
        activeClassName="text-warning fw-bold"
        className="d-flex justify-content-center align-items-center list-unstyled p-2 w-100 gap-1 m-0"
        onPageChange={onPageChange}
        onPageActive={(data) => console.log(data, "active")}
      />
    </div>
  );
};

export default PaginationItem;
