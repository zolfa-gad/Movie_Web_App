import React from "react";
import HorizontalListItem from "../HorizontalListItem/HorizontalListItem";
import { useNavigate } from "react-router-dom";
import styles from "./MultiListSection.module.css";

const MultiListSection = ({ list1, list2, list3, sectionTitle }) => {
  const navigate = useNavigate();

  function onViewMoreClick(listTitle) {
    navigate(`view-more/${sectionTitle}/${listTitle}`, {});
  }

  return (
    <header className="p-md-5 p-2 py-5 mt-5 overflow-hidden">
      <div
        className="text-light shadow-lg rounded-2 d-flex flex-column justify-content-center align-items-center position-relative "
        style={{ border: "2px solid #ffc107" }}
      >
        <div className={`p-2 px-4  bg-dark rounded-3 ${styles.multiListTitle}`}>
          <h2
            className="croissant-font fs-1 fw-bolder"
            style={{ color: "#ffc107" }}
          >
            {sectionTitle}
          </h2>
        </div>

        <div className="py-5 d-flex flex-column justify-content-center align-items-center gap-4 w-100 overflow-hidden">
          <HorizontalListItem
            list={list1.value}
            title={list1.title}
            section={sectionTitle}
            onViewMoreClick={() => {
              onViewMoreClick(list1.title);
            }}
          />

          <HorizontalListItem
            list={list2.value}
            title={list2.title}
            section={sectionTitle}
            onViewMoreClick={() => {
              onViewMoreClick(list2.title);
            }}
          />

          <HorizontalListItem
            list={list3.value}
            title={list3.title}
            section={sectionTitle}
            onViewMoreClick={() => {
              onViewMoreClick(list3.title);
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default MultiListSection;
