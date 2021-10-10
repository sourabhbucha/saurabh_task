import React from 'react'
import './PasswordEmail.css'

function PasswordEmail() {
    return (
        <div className="PasswordEmail">
            <div className="changePassword">
                <h1>Change Password</h1>
                <div className="Contact-Info-grid-input PasswordEmail-input">
                    <h2>Enter Old Password*</h2>
                    <input type="password" />
                </div>
                <div className="Contact-Info-grid-input PasswordEmail-input">
                    <h2>Enter New Password*</h2>
                    <input type="password" />
                </div>
                <div className="Contact-Info-grid-input PasswordEmail-input">
                    <h2>Confirm New Password*</h2>
                    <input type="password" />
                </div>
                <p>SAVE</p>
            </div>
            <div className="changeEmail">
                <h1>Change Your Email</h1>
                <div className="Contact-Info-grid-input PasswordEmail-input">
                    <h2>Current Email Address</h2>
                    <input type="email" />
                </div>
                <div className="Contact-Info-grid-input PasswordEmail-input">
                    <h2>Enter New Email Address</h2>
                    <input type="email" />
                </div>
                <div className="Contact-Info-grid-input PasswordEmail-input">
                    <h2>Enter Password</h2>
                    <input type="password" />
                </div>
                <p>SAVE</p>
            </div>
        </div>
    )
}

export default PasswordEmail
