import React from "react";

const PrivacyInfo = () => {
  return (
    <h1
      style={{
        color: "#8C8CA2",
        fontSize: "14px",
        lineHeight: "21px",
        fontFamily: "Poppins",
        width: "100%",
        margin: "0 auto",
        fontWeight: "400",
        textAlign: "center",
        marginTop: "18px",
      }}
    >
      By signing up to our service, you agree to our{" "}
      <span style={{ color: "#ffffff", cursor: "pointer" }}>
        &nbsp;Terms & Conditions&nbsp;
      </span>
      and
      <span style={{ color: "#ffffff", cursor: "pointer" }}>
        &nbsp;Privacy Policy
      </span>
    </h1>
  );
};

export default PrivacyInfo;
