import React from "react";
import "./OuthBtn.css";
const OuthBtn = ({
  outhBtnName,
  outhLogo,
  outhAlt,
  textColor,
  bgColor,
  outhAction,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="outhBtn-container"
      onClick={outhAction}
    >
      <h1
        style={{
          color: textColor,
          fontSize: "13px",
          lineHeight: "19px",
          fontWeight: "600",
          fontFamily: "Poppins",
        }}
      >
        {outhBtnName}
      </h1>
      <img src={outhLogo} alt={outhAlt} height="21.5px" width="21px" />
    </div>
  );
};

export default OuthBtn;
