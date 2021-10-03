import React from "react";

const Button = ({ btnName, SignupLogin, createAcc, fontFamily }) => {
  return (
    <button
      onClick={createAcc ?? SignupLogin}
      style={{
        background: "#2A7AF2",
        borderRadius: "3px",
        border: "none",
        // width: btnWidth,
        width: "100%",
        height: "39px",
        margin: "0 auto",
        display: "block",
        fontSize: "13px",
        marginTop: "18px",
        fontWeight: "bold",
        color: "white",
        cursor: "pointer",
        outline: "none",
        fontFamily: fontFamily ?? "Arial",
      }}
      type="submit"
    >
      {btnName}
    </button>
  );
};

export default Button;
