import React from "react";
import "./Properties.css";
const Properties = ({ icon, imageName, title, subTitle }) => {
  return (
    <div className="prop-container">
      <img src={icon} alt={imageName} width="auto" height="56px" />
      <h1
        style={{
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "22px",
          color: "#FFFFFF",
        }}
      >
        {title}
      </h1>
      <h4 className="prop-subtitle">{subTitle}</h4>
    </div>
  );
};

export default Properties;
