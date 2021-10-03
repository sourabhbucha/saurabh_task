import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./BtnWithEye.css";
const BtnWithEye = ({ inputType, placeholder, marginT }) => {
  const [typePassword, setTypePassword] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        background: "white",
        borderRadius: "3px",
        margin: " 0 auto",
        alignItems: "center",
        marginTop: marginT ?? "0px",
      }}
    >
      <input
        style={{
          borderRadius: "3px",
          width: "100%",
          border: "none",
          height: "39px",
          outline: "none",
          display: "block",
          paddingLeft: "5px",
        }}
        placeholder={placeholder}
        type={typePassword ? inputType : "text"}
        required
      />
      <section
        style={{
          cursor: "pointer",
          marginRight: "10px",
          display: "flex",
          alignItems: "center",
          userSelect: "none",
        }}
        onClick={() => setTypePassword(!typePassword)}
      >
        {typePassword ? (
          <AiFillEyeInvisible color="#787878" size="20.41px" />
        ) : (
          <AiFillEye color="#787878" size="20.41px" />
        )}
      </section>
    </div>
  );
};

export default BtnWithEye;
