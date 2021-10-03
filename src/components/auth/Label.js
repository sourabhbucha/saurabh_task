import React from "react";

const Label = ({ labelName }) => {
  return (
    <h1
      style={{
        color: "white",
        fontSize: "14px",
        lineHeight: "22px",
        fontFamily: "Poppins",
        fontWeight: "500",
        margin: "0 auto",
      }}
    >
      {labelName}
    </h1>
  );
};

export default Label;
