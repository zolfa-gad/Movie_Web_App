import React from "react";

const ButtonItem = ({ text, className, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`btn p-2 px-4 fs-4 ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonItem;
