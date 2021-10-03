import React from "react";
import closeBtn from "../../assets/Vector.png";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import OuthBtn from "./OuthBtn";
import googleLogo from "../../assets/Group.png";
import fbLogo from "../../assets/fblogo.png";
import PrivacyInfo from "./PrivacyInfo";
import "./LoginSignup.css";
import BtnWithEye from "./BtnWithEye";

const LoginSignup = ({ setIsOpen, isLogin, setIsLogin, setIsOpen1 }) => {
  // onClick  login and signup button

  const SignupLogin = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("login successful");
    } else {
      setIsOpen1(true);
      setIsOpen(false);
    }
  };

  // onclick login with outh
  const outhAction = () => {
    alert("working..");
  };

  return (
    <div className="login-container">
      <div
        style={{
          background: "#131B2C",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "21px",
            fontStyle: "normal",
            lineHeight: "31px",
            color: "#ffffff",
            display: "flex",
            marginLeft: "auto",
            justifyContent: "space-around",
            width: "75%",
          }}
        >
          {isLogin ? "LOGIN" : "SIGN UP"}
        </h1>
        <img
          src={closeBtn}
          alt="closeLogo"
          height="13px"
          width="13px"
          style={{ margin: "0 30px", cursor: "pointer" }}
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div
        style={{
          paddingBottom: "25px",
          paddingTop: "25px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      >
        <form onSubmit={SignupLogin}>
          <section>
            <Label labelName="Email address" />
            <Input inputType="email" />
          </section>

          {isLogin ? (
            <section style={{ marginTop: "18px" }}>
              <Label labelName="Password" />
              <BtnWithEye inputType="password" />
              <div
                style={{
                  textAlign: "right",
                  margin: "auto",
                }}
              >
                <h1
                  style={{
                    color: "#61A0FE",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    cursor: "pointer",
                    margin: "8px auto",
                    display: "inline-block",
                  }}
                >
                  Forget your password?
                </h1>
              </div>
            </section>
          ) : null}

          <Button
            btnName={isLogin ? "LOGIN NOW" : "SIGN UP"}
            btnWidth="416px"
            setIsOpen1={setIsOpen1}
            setIsOpen={setIsOpen}
            // SignupLogin={SignupLogin}
            fontFamily="Poppins"
          />
        </form>
        <div
          style={{
            margin: " 18px auto",
          }}
        >
          <hr color="#34466A" />
        </div>
        <section className="login-outh">
          <OuthBtn
            outhBtnName={isLogin ? "LOGIN WITH GOOGLE" : "SIGN UP WITH GOOGLE"}
            outhAlt="loginWithGoogle"
            outhLogo={googleLogo}
            textColor="#5F5F5F"
            bgColor="#ffffff"
            outhAction={outhAction}
          />
          <OuthBtn
            outhBtnName={isLogin ? "LOGIN WITH FB" : "SIGN UP WITH FB"}
            outhAlt="loginWithFacebook"
            outhLogo={fbLogo}
            textColor="#ffffff"
            bgColor="#3C5A97"
            outhAction={outhAction}
          />
        </section>
        {isLogin ? null : <PrivacyInfo />}
        <section className="loginSignup-change">
          <h1
            style={{
              color: "#8C8CA2",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "21px",
              display: "inline-block",
            }}
          >
            {isLogin ? " Don't have an account" : "Already registered?"}
          </h1>
          <button
            className="loginSignup-Btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "SIGN UP NOW" : "LOGIN NOW"}
          </button>
        </section>
      </div>
    </div>
  );
};

export default LoginSignup;
