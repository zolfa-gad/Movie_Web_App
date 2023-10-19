import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

const NavDropDownItem = ({ title, dropItems }) => {
  const navigate = useNavigate();

  function onItemClick(event) {
    navigate(`view-more/${title}/${event.target.innerText}`);
  }

  return (
    <NavDropdown
      title={<span className="croissant-font text-light ">{title}</span>}
      variant="dark"
    >
      {dropItems.map((item, index) => (
        <NavDropdown.Item key={`drop-${index}`} onClick={onItemClick}>
          {item}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default NavDropDownItem;
