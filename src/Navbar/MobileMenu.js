import React from "react";

const MobileMenu = ({ mobileMenuIcon, menuTitle }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={mobileMenuIcon}
        alt="searchIcon"
        height="19px"
        width="20px"
        style={{ padding: "0px 10px 0px 20px" }}
      />
      <h1
        style={{
          fontSize: "18px",
          fontWeight: "500",
          fontFamily: "Poppins",
          lineHeight: "27px",
          color: "#858596",
        }}
      >
        {menuTitle}
      </h1>
    </div>
  );
};

export default MobileMenu;
