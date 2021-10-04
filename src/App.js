import { useState } from "react";
import "./App.css";
// import CreateAccount from "./components/auth/CreateAccount";
// import LoginSignup from "./components/auth/LoginSignup";
// import Home from "./components/home/Home";
// import ReactModal from "./components/ReusableComponents/ReactModal";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "./components/Component/Profile";
import Viewer from "./components/Component/Viewer";
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

  return (
    <div className="App">
      <Router>
        {/* <Home loginModal={loginModal} createAccModal={createAccModal} /> */}
        <Profile loginModal={loginModal} createAccModal={createAccModal} />
        {/* <Viewer loginModal={loginModal} createAccModal={createAccModal} /> */}
        {/* <ReactModal
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
        /> */}
      </Router>
    </div>
  );
}

export default App;
