import React from "react";

const Input = ({ inputType, placeholder, marginL, marginR, marginT }) => {
  return (
    // <input
    //   style={{
    //     background: "white",
    //     borderRadius: "3px",
    //     width: width ?? "100%",
    //     border: "none",
    //     height: "39px",
    //     outline: "none",
    //     margin: " 0 auto",
    //     display: "block",
    //     paddingLeft: "5px",
    //     fontSize: "14px",
    //     marginLeft: marginL ?? "0px",
    //     marginRight: marginR ?? "0px",
    //   }}
    //   placeholder={placeholder}
    //   type={inputType}
    //   required
    // />
    <div
      style={{
        display: "flex",
        width: "100%",
        background: "white",
        borderRadius: "3px",
        margin: " 0 auto",
        alignItems: "center",
        marginTop: marginT ?? "0px",
        marginLeft: marginL ?? "0px",
        marginRight: marginR ?? "0px",
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
        type={inputType}
        required
      />
    </div>
  );
};

export default Input;
