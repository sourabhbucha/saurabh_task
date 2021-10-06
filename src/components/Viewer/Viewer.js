import React from "react";
import Cart from "./Cart";
import Details from "./Details";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";
import View from "./View";

function Viewer() {
    return (
        <div className="Profile">
            <ProfileInfo />
            <div className="grid">
            <Details />
            <Cart />
            </div>
            <View isOnline={false} />
        </div>
    )
}

export default Viewer
