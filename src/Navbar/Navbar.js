import React, { useState } from "react";
import "./Navbar.css";
import obtainr from "../assets/ObtainR.svg";
import { Link } from "react-router-dom";
import searchIcon from "../assets/searchIcon.png";
import MobileMenu from "./MobileMenu";
import tradeDesignM from "../assets/tradeDesignM.png";
import RewardsM from "../assets/RewardsM.png";
import ChatRoomM from "../assets/chatRoomM.png";
import user from "../assets/user.png";

const Navbar = ({ createAccModal, loginModal, setShowPage, showPage }) => {
  const [menu, setMenu] = useState(false);
  const [float, setfloat] = useState(false);
  const [float1, setfloat1] = useState(false);

  const showMobileMenu = () => {
    setMenu(!menu);
    setShowPage(!showPage);
  };
  const SetFloatVisisble = () => {
    if(float){
      document.getElementById("floatMenu").style.display = "none"
    }
    else{
      document.getElementById("floatMenu").style.display = "flex"
    }
    setfloat(!float)
  };
  const SetFloatVisisble1 = () => {
    if(float1){
      document.getElementById("floatMenu1").style.display = "none"
    }
    else{
      document.getElementById("floatMenu1").style.display = "flex"
    }
    setfloat1(!float1)
  };
  return(
    <nav className="navbar1">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo11">
          <img src={obtainr} alt="logo" className="navbar-logo-img" />
        </Link>
        <div className="navbaroptions-list">
          <Link to="/" className="navbar-options">
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8213 6.16596C15.0288 6.0393 15.1595 5.81406 15.1595 5.57171C15.1595 5.32935 15.0322 5.1048 14.8261 4.97883L6.79486 0.10091C6.57989 -0.0291676 6.19992 -0.0339599 5.98084 0.0892717C5.76313 0.211819 5.47902 0.44322 5.47902 0.694476V2.33825C5.47902 2.84213 5.19079 3.27002 4.69307 3.3508C2.07782 3.77595 0 6.0215 0 8.72918C0 9.53771 0.19854 10.3024 0.514834 10.9918C0.563442 11.098 0.679828 11.1657 0.797583 11.1657C0.914653 11.1651 1.02488 11.0952 1.0728 10.9891C1.70334 9.58769 2.911 8.50257 4.39115 8.03155C4.68006 7.93913 4.91968 7.99047 5.16409 8.16916C5.4085 8.34784 5.47902 8.63333 5.47902 8.93662V10.4496C5.47902 10.7002 5.76176 10.9323 5.97947 11.0555C6.19855 11.1794 6.57578 11.174 6.79075 11.0432L14.8213 6.16596Z" fill="white"/>
              <path d="M21.4279 9.68218C21.3814 9.57264 21.265 9.50007 21.1452 9.50007C21.026 9.49939 20.9138 9.57059 20.8665 9.68012C20.1456 11.3451 18.8791 12.1886 17.5543 12.611C17.2654 12.7034 17.008 12.6527 16.7636 12.4741C16.5185 12.2947 16.4329 12.0099 16.4329 11.7073V10.1936C16.4329 9.94233 16.1666 9.71093 15.9489 9.58839C15.7298 9.46378 15.3622 9.46926 15.1465 9.60071L7.12072 14.4779C6.91328 14.6039 6.7832 14.8292 6.7832 15.0708C6.7832 15.3132 6.91191 15.5384 7.11867 15.6644L15.1506 20.5416C15.3649 20.6717 15.7285 20.6765 15.9475 20.5539C16.1652 20.4307 16.4329 20.1993 16.4329 19.9481V18.3043C16.4329 17.8011 16.7376 17.3739 17.2353 17.2917C19.8505 16.8666 21.9373 14.6217 21.9373 11.9134C21.9373 11.2904 21.7435 10.4264 21.4279 9.68218Z" fill="white"/>
            </svg>
            Trade
          </Link>
          <Link to="/" className="navbar-options">
            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7652 13.938H8.98789C8.58411 14.3878 8.10111 14.9066 7.65133 15.4151C6.63167 16.5677 4.24222 17.5158 3.89467 17.6078C3.54711 17.6998 2.61944 17.6538 3.17656 17.0072C3.73367 16.3607 4.28822 14.6996 4.28822 13.938H2.68844C1.21133 13.938 0 12.7343 0 11.2598V2.67567C0 1.20367 1.21133 0 2.68844 0H15.7652C17.2449 0 18.4562 1.20367 18.4562 2.67567V11.2598C18.4562 12.7343 17.2449 13.938 15.7652 13.938ZM13.7719 5.53789C13.0563 5.53789 12.4737 6.11544 12.4737 6.831C12.4737 7.544 13.0563 8.12156 13.7719 8.12156C14.49 8.12156 15.0701 7.544 15.0701 6.831C15.0701 6.11544 14.49 5.53789 13.7719 5.53789ZM9.32011 5.67589C8.60456 5.67589 8.02189 6.256 8.02189 6.969C8.02189 7.682 8.60456 8.26211 9.32011 8.26211C10.0382 8.26211 10.6183 7.682 10.6183 6.969C10.6183 6.256 10.0382 5.67589 9.32011 5.67589ZM4.86833 5.81389C4.15278 5.81389 3.57011 6.394 3.57011 7.107C3.57011 7.82 4.15278 8.40011 4.86833 8.40011C5.58644 8.40011 6.16656 7.82 6.16656 7.107C6.16656 6.394 5.58644 5.81389 4.86833 5.81389ZM20.4956 4.47733H20.1148C20.1301 4.58211 20.1378 4.68944 20.1378 4.79933V12.9694C20.1378 14.3392 19.0108 15.4611 17.6333 15.4611H9.73667C9.223 16.0182 8.36178 16.951 8.36178 16.951C8.36178 16.951 8.63778 17.6308 9.50667 17.6308H16.4373C16.7006 18.469 17.4059 19.1718 17.8761 19.5347C18.3872 19.9257 19.2791 20.4674 20.0202 20.5032C20.7613 20.5364 20.8431 20.2962 20.7153 20.1327C20.5876 19.9717 20.217 19.0951 20.0662 18.7016C19.9691 18.4486 19.9793 17.9502 19.9972 17.6308H20.4956C21.873 17.6308 23 16.5089 23 15.1366V6.969C23 5.59667 21.873 4.47733 20.4956 4.47733Z" fill="white"/>
            </svg>
            Friends
          </Link>
          <Link to="/" className="navbar-options">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.7796 0C17.7667 0 15.562 1.91967 15.5102 5.02079C15.5082 5.14277 15.5547 5.26057 15.6395 5.34828C15.7243 5.43599 15.8405 5.48642 15.9625 5.48848C16.0838 5.48848 16.2005 5.44132 16.2877 5.35694C16.375 5.27256 16.4261 5.15758 16.4302 5.03626C16.4712 2.57404 18.1952 0.919904 19.7796 0.919904C21.2201 0.919904 22.0801 1.74073 22.0801 3.11585C22.0801 4.69212 20.4126 6.04501 18.8518 6.78548C18.2816 7.05696 17.6846 7.26828 17.0706 7.41601L16.9889 6.68141C16.9699 6.51017 16.8932 6.35051 16.7713 6.22868C16.6495 6.10686 16.4898 6.03011 16.3186 6.01108L10.5599 5.37124C10.4468 5.35867 10.3324 5.3717 10.225 5.40936C10.1176 5.44702 10.0201 5.50835 9.93962 5.5888L0.185774 15.3426C0.126878 15.4015 0.080159 15.4714 0.0482838 15.5484C0.0164085 15.6253 1.66127e-06 15.7078 1.26152e-10 15.7911C-1.66102e-06 15.8744 0.016402 15.9569 0.0482742 16.0338C0.0801463 16.1108 0.126863 16.1807 0.185757 16.2396L6.7604 22.8142C6.81929 22.8731 6.8892 22.9198 6.96615 22.9517C7.0431 22.9836 7.12557 23 7.20886 23C7.29215 23 7.37462 22.9836 7.45157 22.9517C7.52852 22.9198 7.59843 22.8731 7.65732 22.8142L17.4112 13.0603C17.4916 12.9799 17.553 12.8824 17.5906 12.775C17.6283 12.6676 17.6413 12.5531 17.6288 12.44L17.2747 9.25369C16.7616 9.36751 16.2385 9.43 15.713 9.44025C15.5855 9.43937 15.4587 9.42068 15.3363 9.38472C15.1361 9.5084 14.9052 9.57317 14.6699 9.5716C14.4347 9.57003 14.2046 9.50218 14.0061 9.37584C13.8077 9.24951 13.6488 9.06979 13.5478 8.85731C13.4468 8.64483 13.4077 8.40818 13.4351 8.1745C13.4624 7.94082 13.555 7.71958 13.7024 7.53615C13.8497 7.35271 14.0457 7.21451 14.268 7.13739C14.4903 7.06027 14.7298 7.04735 14.959 7.10012C15.1883 7.15288 15.3981 7.2692 15.5643 7.43573C15.6141 7.48652 15.6595 7.54159 15.6997 7.60029C15.6296 7.60026 15.5613 7.59807 15.493 7.59583C15.4312 7.59685 15.3695 7.59048 15.3092 7.57686C15.1974 7.52946 15.0714 7.5282 14.9586 7.57337C14.8459 7.61853 14.7556 7.70645 14.7074 7.81794C14.6592 7.92944 14.6571 8.05545 14.7015 8.1685C14.7459 8.28155 14.8332 8.37246 14.9443 8.4214C15.1106 8.48596 15.2878 8.5179 15.4662 8.51548C15.5418 8.51798 15.6198 8.52022 15.704 8.52022C16.9349 8.46878 18.1414 8.16099 19.2465 7.61654C21.5968 6.50147 23 4.8189 23 3.11585C23 1.22313 21.7359 0 19.7796 0ZM11.9277 14.701L11.931 14.7656L10.589 14.8451L10.5849 14.7687C10.5663 14.3989 10.5275 13.6297 9.9489 13.051C9.5005 12.6027 8.85367 12.4919 8.53635 12.8093C8.2702 13.0754 8.34934 13.7153 8.75353 14.5646C9.61619 16.3777 9.20453 17.351 8.70735 17.8482C8.0028 18.5527 6.8564 18.5939 5.9263 18.0243L5.15861 18.792L4.208 17.8414L4.96823 17.0811C4.58452 16.4561 4.3763 15.7392 4.36546 15.0058L4.36199 14.9413L5.70403 14.8618L5.70809 14.938C5.72671 15.3077 5.76559 16.0772 6.34419 16.6558C6.79258 17.1042 7.4394 17.2149 7.75672 16.8976C8.02287 16.6314 7.94366 15.9916 7.5395 15.1423C6.67682 13.3292 7.0885 12.3559 7.58575 11.8587C8.2903 11.1541 9.43668 11.113 10.3668 11.6825L11.1344 10.9149L12.085 11.8656L11.3248 12.6257C11.7086 13.2508 11.9168 13.9676 11.9277 14.701Z" fill="white"/>
            </svg>
            Pricing
          </Link>
        </div>
        <section className="searchbar">
              <img
                src={searchIcon}
                alt="searchIcon"
                height="16px"
                width="17px"
                className="searchbar-logo"
              />
              <input
                type="text"
                placeholder="Search"
                className="searchbar-text"
              /> 
            </section>
        <div className="navbar-btn1">
          <button className="nav-btn13">
            Log Out
          </button>
            {/* <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5278 14.2008C15.0179 14.2008 17.0364 12.1822 17.0364 9.69218C17.0364 7.20213 15.0179 5.18354 12.5278 5.18354C10.0378 5.18354 8.01917 7.20213 8.01917 9.69218C8.01917 12.1822 10.0378 14.2008 12.5278 14.2008Z" fill="#2A7AF2"/>
              <path d="M12.5 0C5.61555 0 0 5.58855 0 12.5C0 19.4114 5.61555 25 12.5 25C19.3844 25 25 19.3845 25 12.5C25 5.61555 19.3844 0 12.5 0ZM19.8434 20.3834C18.9255 17.9266 16.9276 15.3078 12.5 15.3078C8.09935 15.3078 6.07451 17.9266 5.15659 20.3834C3.05076 18.4125 1.70086 15.6048 1.70086 12.5C1.70086 6.56048 6.53348 1.70086 12.5 1.70086C18.4665 1.70086 23.2991 6.53348 23.2991 12.5C23.2991 15.6048 21.9492 18.4125 19.8434 20.3834Z" fill="#2A7AF2"/>
            </svg> */}
            <img src={user} alt="" width="40" height="40" className="UserImg" onClick={SetFloatVisisble} />
        </div>
        <div className="floatMenu" id="floatMenu">
          <a href="">Profile</a>
          <a href="">Notifications</a>
          <a href="">Settings</a>
        </div>
      </div>
      <div className="navbar-mobileMenu1">
        {/* {menu ? (
          <div className="CloseLogo">
            <Link to="/" className="navbar-logo11-mobileView">
              <img src={obtainr} alt="logo" className="navbar-logo-img-close" />
            </Link>
            <img src={closeMenu} alt="logo" height="24px" width="auto" className="closebtnNav" onClick={() => showMobileMenu()} />
          </div>
        ) : (
          <img src={hamburger} alt="logo" height="24px" width="auto" onClick={() => showMobileMenu()} />
        )} */}
        <div className="CloseLogo">
          <Link to="/" className="navbar-logo11-mobileView">
            <img src={obtainr} alt="logo" className="navbar-logo-img-close" />
          </Link>
          {/* <img src={closeMenu} alt="logo" height="24px" width="auto" className="closebtnNav" onClick={() => showMobileMenu()} /> */}
          <div id="menuToggle" className="closebtnNav" onClick={() => showMobileMenu()} >
            <input type="checkbox" />
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
        </div>
        </div>
        {showPage ? null : (
          <div className="main-mobileView1">
            <section className="searchbar-mobile-view">
              <img
                src={searchIcon}
                alt="searchIcon"
                height="16px"
                width="17px"
                className="searchbar-logo"
              />
              <input
                type="text"
                placeholder="Search"
                className="searchbar-text"
              /> 
            </section>

            <MobileMenu  mobileMenuIcon={tradeDesignM}  menuTitle="Trade" className="options-mobile-view" />

            <MobileMenu mobileMenuIcon={ChatRoomM} menuTitle="Friends" />

            <MobileMenu mobileMenuIcon={RewardsM} menuTitle="Pricing" />

            <div className="navbar-btn-mobile">
              <button className="nav-btn2-mobile">
                Log Out
              </button>
              <img src={user} alt="" width="40" height="40" onClick={SetFloatVisisble1} />
            </div>
            <div className="floatMenu1" id="floatMenu1">
          <a href="">Profile</a>
          <a href="">Notifications</a>
          <a href="">Settings</a>
        </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
