import React, { useContext, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import { DataContext } from "../../../context/DataContextStore";
import SearchCardItem from "../../reusable/SearchCardItem/SearchCardItem";
import { MdClose } from "react-icons/md";
import { BsArrowUpCircleFill } from "react-icons/bs";
import PaginationItem from "../../reusable/PaginationItem/PaginationItem";
import styles from "./SearchWindowSection.module.css";
import ButtonItem from "./../../reusable/ButtonItem/ButtonItem";
import FormInputItem from "../../reusable/FormInputItem/FormInputItem";

const SearchWindowSection = () => {
  const {
    onSearchInputChange,
    searchResultList,
    onCloseSearchWindow,
    searchVisibility,
    searchValue,
    setSearchCountPage,
  } = useContext(DataContext);

  function onPageChange(data) {
    setSearchCountPage(data.selected);
  }

  const reference = useRef();
  function onButtonUpClick() {
    reference.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      <section className={`${styles.searchWindow} ${searchVisibility} `}>
        <span ref={reference} />

        <Container
          className={`bg-dark rounded-4 d-flex flex-column justify-content-start align-items-center  gap-2 p-2 min-vh-100 ${styles.container}`}
        >
          <ButtonItem
            className={"align-self-end fw-bold position-sticky top-0"}
            text={<MdClose size={30} />}
            onClick={onCloseSearchWindow}
          />

          <FormInputItem
            inputValue={searchValue}
            onInputChange={onSearchInputChange}
          />

          <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 text-light p-2 py-4">
            {searchResultList.map((item) => (
              <SearchCardItem key={item.id} movie={item} />
            ))}
          </div>

          {searchResultList.length ? (
            <PaginationItem onPageChange={onPageChange} />
          ) : (
            ""
          )}
        </Container>
      </section>

      <BsArrowUpCircleFill
        size={35}
        className={`${styles.buttonUp} text-light ${searchVisibility}`}
        onClick={onButtonUpClick}
      />
    </div>
  );
};

export default SearchWindowSection;
