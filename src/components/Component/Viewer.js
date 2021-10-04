import React, { useState , useEffect} from "react";
import Cart from "./Cart";
import Details from "./Details";
import Navbar from "./Navbar";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";
import Upload from "./Upload";

function Viewer(loginModal, createAccModal ) {
    const [showPage, setShowPage] = useState(true);
    useEffect(() => {
        document.getElementById('1').style.cssText = 'display: none;';
        document.getElementById('2').style.cssText = 'display: none;';
        document.getElementById('3').style.cssText = 'display: none;';
        document.getElementById('4').style.cssText = 'display: none;';
        document.getElementById('msg').innerHTML = "MESSAGE";
        for (var i=0; i < 6; i++) {
            document.getElementsByClassName('trade')[i].innerHTML = "OFFER TRADE";
            document.getElementsByClassName('view')[i].innerHTML = "FULL VIEW";
        } 
    }, [])
    return (
        <div className="Profile">
            <Navbar
                setShowPage={setShowPage}
                showPage={showPage}
                loginModal={loginModal}
                createAccModal={createAccModal}
            />
            <ProfileInfo />
            <div className="grid">
            <Details />
            <Cart />
            </div>
            <Upload />
        </div>
    )
}

export default Viewer
