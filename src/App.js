import { useState } from "react";
import "./App.css";
import CreateAccount from "./components/auth/CreateAccount";
import LoginSignup from "./components/auth/LoginSignup";
import Home from "./components/home/Home";
import ReactModal from "./components/ReusableComponents/ReactModal";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "./components/UserProfile/Profile";
import Viewer from "./components/Viewer/Viewer";
import OfferPopUp from "./components/NewOffer/OfferPopUp";
import FriendsNotifications from "./components/FriendsNotification/FriendsNotifications";
import TradePage from "./components/TradePage/TradePage";
import Settings from "./components/Settings/Settings";
import ViewDesign from "./components/ViewDesign/ViewDesign";
import FirstLogin from "./components/FirstLoginScreen/FirstLogin";
import AlertTrade from "./components/AlertTrade/AlertTrade";
import Pricing from "./components/Pricing/Pricing";
import Agreement from "./Agreement Page/Agreement";
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // login and signup function
  const createAccModal = () => {
    setIsOpen(true);
    setIsLogin(false);
  };
  const loginModal = () => {
    setIsOpen(true);
    setIsLogin(true);
  };

  const [showPage, setShowPage] = useState(true);
  return (
    <div className="App">
      <Router>
        {/* <Home loginModal={loginModal} createAccModal={createAccModal} /> */}
        <Navbar setShowPage={setShowPage}  showPage={showPage}  loginModal={loginModal}  createAccModal={createAccModal}  />
        {/* <AlertTrade /> */}
        {/* <FirstLogin /> */}
        {/* <ViewDesign /> */}
        <Agreement />
        <Profile />
        {/* <Viewer /> */}
        {/* <FriendsNotifications /> */}
        {/* <OfferPopUp /> */}
        {/* <TradePage /> */}
        {/* <Pricing/> */}
        {/* <Settings /> */}

        <ReactModal 
          body={
            <LoginSignup
              setIsOpen={setIsOpen}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              setIsOpen1={setIsOpen1}
            />
          }
          setIsOpen={setIsOpen}
          modalIsOpen={modalIsOpen}
        />
        <ReactModal
          body={<CreateAccount setIsOpen1={setIsOpen1} />}
          setIsOpen={setIsOpen1}
          modalIsOpen={modalIsOpen1}
        />
      </Router>
    </div>
  );
}

export default App;
