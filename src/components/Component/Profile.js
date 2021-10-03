import React, { useState } from "react";
import Cart from "./Cart";
import Details from "./Details";
import Navbar from "./Navbar";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";

function Profile(loginModal, createAccModal ) {
    const [showPage, setShowPage] = useState(true);
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
        </div>
    )
}

export default Profile
