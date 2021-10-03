import React from "react";
import closeBtn from "../../assets/Vector.png";
import BtnWithEye from "./BtnWithEye";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import PrivacyInfo from "./PrivacyInfo";
import "./CreateAccount.css";
import obtainr from "../../assets/ObtainR.svg";

const CreateAccount = ({ setIsOpen1 }) => {
  const createAcc = (e) => {
    e.preventDefault();
    console.log("click btn");
  };
  return (
    <div
      style={{ maxWidth: "650px", backgroundColor: "#192337", margin: "auto" }}
    >
      <div
        style={{
          background: "#131B2C",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "61px",
        }}
      >
        <h1
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "25px",
            lineHeight: "30px",
            color: "#ffffff",
            display: "flex",
            marginLeft: "auto",
            justifyContent: "space-around",
            width: "75%",
          }}
        >
          <img src={obtainr} alt="logo" height="30px" width="auto" />
        </h1>

        <img
          src={closeBtn}
          alt="closeLogo"
          height="13px"
          width="13px"
          style={{ margin: "0 30px", cursor: "pointer" }}
          onClick={() => setIsOpen1(false)}
        />
      </div>
      <div className="createAcc-container">
        <h1
          style={{
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "bold",
            fontFamily: "Poppins",
            color: "white",
            marginBottom: "18px",
          }}
        >
          <span style={{ color: "#61A0FE" }}>LAST STEP</span> &nbsp;AND YOU ARE
          DONE!
        </h1>
        <Input placeholder="OBTAINR Username" inputType="text" />
        <section className="createAccount-username">
          <Input placeholder="First Name" inputType="text" marginR="7px" />
          <Input placeholder="Last Name" inputType="text" />
        </section>
        <BtnWithEye
          placeholder="Password"
          inputType="password"
          marginT="18px"
        />
        <BtnWithEye
          placeholder="Confirm Password"
          inputType="password"
          marginT="18px"
        />
        <section style={{ marginTop: "18px", textAlign: "left" }}>
          <Label labelName="BIRTHDAY" />
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Input placeholder="dd" inputType="text" />
            <Input
              placeholder="mm"
              inputType="text"
              marginL="7px"
              marginR="7px"
            />
            <Input placeholder="yyyy" inputType="text" />
          </section>
        </section>
        <Button
          btnName="CREATE ACCOUNT"
          btnWidth="416px"
          createAcc={createAcc}
          fontFamily="Poppins"
        />
        <div
          style={{
            width: "100%",
            margin: " 18px auto",
          }}
        >
          <hr color="#34466A" />
          <PrivacyInfo />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;