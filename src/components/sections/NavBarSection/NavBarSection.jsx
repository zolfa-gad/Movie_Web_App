import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropDownItem from "../../reusable/NavDropDownItem/NavDropDownItem";
import { DataContext } from "../../../context/DataContextStore";
import SearchWindowSection from "../SearchWindowSection/SearchWindowSection";
import { useNavigate } from "react-router-dom";
import FormInputItem from "../../reusable/FormInputItem/FormInputItem";

const NavBarSection = () => {
  const { onNavSearchClick } = useContext(DataContext);

  const navigate = useNavigate();

  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        style={{ backgroundColor: "rgb(0, 0, 0, 0.7)" }}
        className="  gap-3 shadow px-2 d-flex justify-content-between align-items-center"
        data-bs-theme="dark"
      >
        <Navbar.Brand
          href="#home"
          className="satisfy-font fs-2 fw-bolder d-flex justify-content-between"
        >
          {"Cima"}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="p-2 " />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="fs-5  flex-grow-0 text-light "
        >
          <Nav
            variant="underline"
            className="gap-3 d-flex justify-content-center align-items-center"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Link
              className="croissant-font text-light d-flex justify-content-center align-items-center px-2 text-decoration-none"
              onClick={() => {
                navigate("/");
              }}
            >
              {"Home"}
            </Nav.Link>

            <NavDropDownItem
              title={"Movies"}
              dropItems={["Now Playing", "Popular", "Top Rated", "Upcoming"]}
              sectionName={"Movies"}
            />

            <NavDropDownItem
              title={"TV Series"}
              dropItems={["Airing Today", "On The Air", "Popular", "Top Rated"]}
              sectionName={"Series"}
            />

            <FormInputItem onFormClick={onNavSearchClick} isReadOnly={true} />

            <SearchWindowSection />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBarSection;
