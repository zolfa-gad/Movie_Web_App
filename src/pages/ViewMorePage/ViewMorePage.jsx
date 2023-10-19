import React, { useContext, useEffect, useState } from "react";
import MovieCardItem from "../../components/reusable/MovieCardItem/MovieCardItem";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContextStore";
import PaginationItem from "../../components/reusable/PaginationItem/PaginationItem";

const ViewMorePage = () => {
  const state = useParams();

  const [list, setListData] = useState([]);

  const { getDataFromAPI } = useContext(DataContext);

  const [pageCounter, setPageCounter] = useState(1);

  useEffect(() => {
    const sectionTitle = state.section === "Movies" ? "movie" : "tv";
    const listTitle = state.list.toLowerCase().split(" ").join("_");

    getDataFromAPI(
      `https://api.themoviedb.org/3/${sectionTitle}/${listTitle}`,
      pageCounter
    ).then((data) => {
      setListData(data.results);
      console.log(data, "listdata");
    });
  }, [state, pageCounter]);

  function onPageChange(data) {
    setPageCounter(data.selected + 1);
  }

  return (
    <section className="min-vh-100 text-light ">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div
          style={{ height: "65px", width: "100%" }}
          className="bg-dark"
        ></div>
        <h2 className="pt-3 fs-1 fw-bold martian-font text-center">{`${state.section} ${state.list}`}</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center py-4 gap-3">
          {list?.map((item) => (
            <MovieCardItem key={item.id} movie={item} type={state.section} />
          ))}
        </div>
        <PaginationItem onPageChange={onPageChange} />
      </Container>
    </section>
  );
};

export default ViewMorePage;
