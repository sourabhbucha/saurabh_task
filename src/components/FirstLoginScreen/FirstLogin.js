import React from 'react'
import './FirstLogin.css'
import user from "../../assets/user.png";
import FirstPage from "../../assets/FirstPage.png";

function Clip() {
    return (
        <div className="clipFirst">
            <div className="FirstLoginclip">
                <div className="FirstLogingrid-icons">
                    <a href="" className="FirstLoginbtn1" id="trade">PUT FOR AUCTION</a>
                    <a href="" className="FirstLoginbtn2" id="view">EDIT</a>
                </div>
            </div>
            <div className="FirstLoginclip-user">
                <img src={user} alt="" />
                <h1>Ank12355</h1>
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#3DCE25"/>
                </svg>
                <a>GIFT TOKENS!</a>
            </div>
        </div>
    )
}

function FirstLogin() {
    return (
        <div className="FirstLogin">
            <div className="GlobeArea">
                <h1>Start Your <span className="GlobeAreaBold">First ever design trade</span> journey!</h1>
                <section className="GlobeAreaSearchBox" >
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.12493 14.25C3.19672 14.25 0 11.054 0 7.125C0 3.19675 3.19672 0 7.12493 0C11.0539 0 14.2499 3.19675 14.2499 7.125C14.2499 11.054 11.0539 14.25 7.12493 14.25ZM7.12493 1.58333C4.06912 1.58333 1.58332 4.06917 1.58332 7.125C1.58332 10.1808 4.06912 12.6667 7.12493 12.6667C10.1807 12.6667 12.6665 10.1808 12.6665 7.125C12.6665 4.06917 10.1807 1.58333 7.12493 1.58333ZM18.2081 19C18.0055 19 17.8028 18.9224 17.6484 18.768L11.3152 12.4347C11.0056 12.1252 11.0056 11.6248 11.3152 11.3153C11.6247 11.0058 12.125 11.0058 12.4346 11.3153L18.7678 17.6486C19.0774 17.9582 19.0774 18.4585 18.7678 18.768C18.6135 18.9224 18.4108 19 18.2081 19Z" fill="#8585A1"/>
                    </svg>
                    <input type="text" className="GlobeAreaSearchBox-input"  placeholder="Search by username, category"/>
                    {/* <h1 className="GlobeAreaSearchBox-text">Enter username, category</h1> */}
                </section>
                <img src={FirstPage} alt="" />
            </div>
            <div className="FirstLoginGrid">
                <h1>Trade with Our new members!</h1>
                <div className="FirstLoginGrid-grid">
                    <Clip />
                    <Clip />
                    <Clip />
                    <Clip />
                    <Clip />
                </div>    
                <div className="FirstLoginbottom-cart-nav">
                    <a href="" className="FirstLogincart-nav">First</a>
                    <a href="" className="FirstLogincart-nav">{'<'}</a>
                    <a href="" className="FirstLogincart-nav">1</a>
                    <a href="" className="FirstLogincart-nav">2</a>
                    <a href="" className="FirstLogincart-nav">3</a>
                    <a href="" className="FirstLogincart-nav">{'>'}</a>
                    <a href="" className="FirstLogincart-nav">Last</a>
                </div>    
                <h1>Trade with Our Veterans!</h1>
                <div className="FirstLoginGrid-grid">
                    <Clip />
                    <Clip />
                    <Clip />
                    <Clip />
                    <Clip />
                </div>    
                <div className="FirstLoginbottom-cart-nav">
                    <a href="" className="FirstLogincart-nav">First</a>
                    <a href="" className="FirstLogincart-nav">{'<'}</a>
                    <a href="" className="FirstLogincart-nav">1</a>
                    <a href="" className="FirstLogincart-nav">2</a>
                    <a href="" className="FirstLogincart-nav">3</a>
                    <a href="" className="FirstLogincart-nav">{'>'}</a>
                    <a href="" className="FirstLogincart-nav">Last</a>
                </div>    
                <h1>Trade with People who are Now online!</h1>
                <div className="FirstLoginGrid-grid">
                    <Clip />
                    <Clip />
                    <Clip />
                    <Clip />
                    <Clip />
                </div>    
                <div className="FirstLoginbottom-cart-nav">
                    <a href="" className="FirstLogincart-nav">First</a>
                    <a href="" className="FirstLogincart-nav">{'<'}</a>
                    <a href="" className="FirstLogincart-nav">1</a>
                    <a href="" className="FirstLogincart-nav">2</a>
                    <a href="" className="FirstLogincart-nav">3</a>
                    <a href="" className="FirstLogincart-nav">{'>'}</a>
                    <a href="" className="FirstLogincart-nav">Last</a>
                </div>    
            </div>
            
        </div>
    )
}

export default FirstLogin
