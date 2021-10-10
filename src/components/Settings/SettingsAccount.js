import React from 'react'
import './SettingsAccount.css'


function ContactInfo() {
    return (
        <div className="contactInfo">
        <h1>Contact Information</h1>
        <div className="Contact-Info-grid">
            <div className="Contact-Info-grid-input">
                <h2>Full Name</h2>
                <input type="text" />
            </div>
            <div className="Contact-Info-grid-input">
                <h2>Phone Number</h2>
                <input type="text" />
            </div>
            <div className="Contact-Info-grid-input">
                <h2>Country</h2>
                <select >
                    <option value="1"></option>
                </select>
            </div>
            <div className="Contact-Info-grid-input">
                <h2>State</h2>
                <input type="text" />
            </div>
            <div className="Contact-Info-grid-input Contact-Info-grid-input-wide">
                <h2>Address</h2>
                <input type="text" />
            </div>
        </div>
        <div className="contactInfo-avtar">
            <h1>Avatar</h1>
            <div className="contactInfo-avtar-img">
                <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0L10 4.16667H25L22.5 0H12.5ZM3.75 5C1.6725 5 0 6.6725 0 8.75V25.4167C0 27.4942 1.6725 29.1667 3.75 29.1667H31.25C33.3275 29.1667 35 27.4942 35 25.4167V8.75C35 6.6725 33.3275 5 31.25 5H3.75ZM17.5 7.5C22.7829 7.5 27.0833 11.8005 27.0833 17.0833C27.0833 22.3662 22.7829 26.6667 17.5 26.6667C12.2172 26.6667 7.91667 22.3662 7.91667 17.0833C7.91667 11.8005 12.2172 7.5 17.5 7.5ZM29.5833 8.75C30.2737 8.75 30.8333 9.30967 30.8333 10C30.8333 10.6903 30.2737 11.25 29.5833 11.25C28.893 11.25 28.3333 10.6903 28.3333 10C28.3333 9.30967 28.893 8.75 29.5833 8.75ZM17.5 9.16667C13.1179 9.16667 9.58333 12.7012 9.58333 17.0833C9.58333 21.4655 13.1179 25 17.5 25C21.8822 25 25.4167 21.4655 25.4167 17.0833C25.4167 12.7012 21.8822 9.16667 17.5 9.16667ZM17.5 11.25C20.7216 11.25 23.3333 13.8617 23.3333 17.0833C23.3333 20.305 20.7216 22.9167 17.5 22.9167C14.2784 22.9167 11.6667 20.305 11.6667 17.0833C11.6667 13.8617 14.2784 11.25 17.5 11.25Z" fill="white"/>
                </svg>
            </div>
            <div className="contactInfo-avtar-btn-flex">
                <a className="contactInfo-avtar-btn-blue">Upload</a>
                <a className="contactInfo-avtar-btn-dark">Remove</a>
            </div>
        </div>
    </div>
    )
}
function AboutYou(){
    return(
        <div className="AboutYou">
            <h1>About You</h1>
            <p>An Entertainment Icon, Snoop Dogg has reigned for more than two decades as an unparalleled force who has raised the bar as an entertainer and globally recognized innovator. Snoop defines entertainment history. An award-winning entertainer, Snoop Dogg has released 19 studio albums, sold over 40-million albums worldwide, reached No. 1 countless times on Billboard charts internationally and received 20 GRAMMY® nominations.</p>
        </div>
    )
}
function SocialMedia(){
    return(
        <div className="SocialMedia">
            <h1>Social Media (e.g. Twitter, LinkedIn, etc.)</h1>
            <div className="SocialMedia-Grid">
                <input type="text" placeholder="htps://twitter.com/"/>
                <input type="text" placeholder="htps://facebook.com/"/>
                <input type="text" placeholder="htps://instagram.com/"/>
                <input type="text" placeholder="htps://linkedin.com/"/>
                <input type="text" placeholder="htps://behance.net/"/>
                <input type="text" placeholder="htps://dribbble.com/"/>
            </div>
        </div>
    )
}
function SettingsAccount() {
    return (
        <div className="SettingsAccount">
            <ContactInfo />
            <AboutYou />
            <SocialMedia />
        </div> 
    )
}

export default SettingsAccount
