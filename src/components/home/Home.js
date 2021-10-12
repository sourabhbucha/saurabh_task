import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import worldmap from "../../assets/world1.png";
import circle from "../../assets/Ellipse 2.png";
import avatar1 from "../../assets/Group 181.png";
import avatar2 from "../../assets/Group 186.png";
import avatar3 from "../../assets/Group 182.png";
import Properties from "./Properties";
import tradeDesign from "../../assets/tradeDesign.png";
import designAuction from "../../assets/designAuction.png";
import levelAccount from "../../assets/levelaccount.png";
import earnReward from "../../assets/earnReward.png";
// mobile view icons
import searchIcon from "../../assets/searchIcon.png";
import MobileMenu from "./MobileMenu";
import tradeDesignM from "../../assets/tradeDesignM.png";
import AuctionM from "../../assets/auctionM.png";
import RewardsM from "../../assets/RewardsM.png";
import ChatRoomM from "../../assets/chatRoomM.png";

const Home = ({ setIsOpen, loginModal, createAccModal }) => {
  const [showPage, setShowPage] = useState(true);
  return (
    <div className="home">
      <Navbar
        setShowPage={setShowPage}
        showPage={showPage}
        loginModal={loginModal}
        createAccModal={createAccModal}
      />
      {/* main page */}
      <div>
        <section className="main-section">
          <div className="main-container">
            <img src={worldmap} alt="worldmap" className="main-worldmap" />

            <img src={circle} alt="circle" className="main-circle" />
            <img src={avatar1} alt="avatar1" className="main-avatar1" />
            <img src={avatar2} alt="avatar2" className="main-avatar2" />
            <img src={avatar3} alt="avatar3" className="main-avatar3" />
            <h1 className="main-header">Your Only Design Trading Platform!</h1>
            <h4 className="main-subheading">
              <span style={{ color: "#ffffff" }}>Trade,</span>{" "}
              <span style={{ color: "#4087ed" }}>auction</span> your design with
              a click. Sign up for Obtainr and start your design trading
              journey.
            </h4>
          </div>
          <div className="main-header-sub">
            <h1 className="main-header2">Your Only Design Trading Platform!</h1>
            <h4 className="main-subheading2">
              <span style={{ color: "#ffffff" }}>Trade,</span>{" "}
              <span style={{ color: "#4087ed" }}>auction</span> your design with
              a click. Sign up for Obtainr and start your design trading
              journey.
            </h4>{" "}
          </div>
          {/* mobile view */}
          {showPage ? (
            <div>
              <div className="main-mobile">
                <h1 className="main-header1">
                  Your Only Design Trading Platform!
                </h1>
                <h4 className="main-subheading1">
                  <span style={{ color: "#ffffff" }}>Trade,</span>{" "}
                  <span style={{ color: "#4087ed" }}>auction</span> your design
                  with a click. Sign up for Obtainr and start your design
                  trading journey.
                </h4>
                <div className="main-register">
                  <button
                    className="nav-btn11"
                    onClick={() => createAccModal()}
                  >
                    Create Account
                  </button>
                  <button className="nav-btn22" onClick={() => loginModal()}>
                    Login
                  </button>
                </div>
              </div>
              <section className="main-prop">
                <Properties
                  icon={tradeDesign}
                  imageName="tradeDesign"
                  title="Trade Design"
                  subTitle="Create and trade with other designers! "
                />
                <Properties
                  icon={designAuction}
                  imageName="designAuction"
                  title="Design Auction"
                  subTitle="The best design auction site out there!"
                />
                <Properties
                  icon={levelAccount}
                  imageName="levelAccount"
                  title="Level Your Account!"
                  subTitle="Level your account and get reduced auction fees."
                />
                <Properties
                  icon={earnReward}
                  imageName="rearnReward"
                  title="Earn Rewards!"
                  subTitle="Earn rewards by participating in auction!"
                />
              </section>
            </div>
          ) : null}
        </section>
        {showPage ? null : (
          <section className="main-prop1">
            <Properties
              icon={tradeDesign}
              imageName="tradeDesign"
              title="Trade Design"
              subTitle="Create and trade with other designers! "
            />
            <Properties
              icon={designAuction}
              imageName="designAuction"
              title="Design Auction"
              subTitle="The best design auction site out there!"
            />
            <Properties
              icon={levelAccount}
              imageName="levelAccount"
              title="Level Your Account!"
              subTitle="Level your account and get reduced auction fees."
            />
            <Properties
              icon={earnReward}
              imageName="rearnReward"
              title="Earn Rewards!"
              subTitle="Earn rewards by participating in auction!"
            />
          </section>
        )}
        {showPage ? null : (
          <div className="main-mobileView">
            {/* <section
              style={{
                backgroundColor: "#33334E",
                borderRadius: "6px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                width: "auto",
              }}
            >
              <img
                src={searchIcon}
                alt="searchIcon"
                height="19px"
                width="20px"
                style={{ padding: "0px 10px" }}
              />
              <input
                type="text"
                placeholder="Search"
                style={{
                  width: "100%",
                  outline: "none",
                  border: "none",
                  background: "transparent",
                  fontSize: "18px",
                  color: "white",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              /> 
            </section>*/}

            {/* <MobileMenu  mobileMenuIcon={tradeDesignM}  menuTitle="Trade Designs" /> */}

            {/* <MobileMenu mobileMenuIcon={AuctionM} menuTitle="Auction" /> */}

            {/* <MobileMenu mobileMenuIcon={RewardsM} menuTitle="Rewards" /> */}

            {/* <MobileMenu mobileMenuIcon={ChatRoomM} menuTitle="Chat Room" /> */}
            <div className="navbar-btn-mobile">
              <button className="nav-btn2-mobile" onClick={() => loginModal()}>
                Login
              </button>
              <button
                className="nav-btn1-mobile"
                onClick={() => createAccModal()}
              >
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
