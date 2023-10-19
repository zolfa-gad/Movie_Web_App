import React from "react";

const IconTextLabelItem = ({ text, icon, color, width }) => {
  return (
    <div
      className=" d-flex justify-content-center align-items-center shadow  gap-2 p-2 px-1"
      style={{ color: color, width: width }}
    >
      <span>
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
};

export default IconTextLabelItem;
