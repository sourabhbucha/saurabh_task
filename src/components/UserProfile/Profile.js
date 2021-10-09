import React from "react";
import Cart from "./Cart";
import Details from "./Details";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";
import Upload from "./Upload";

function Profile() {
    return (
        <div className="Profile">
            <ProfileInfo />
            <div className="grid-profile">
            <Details />
            <Cart />
            </div>
            <Upload />
        </div>
    )
}

export default Profile
