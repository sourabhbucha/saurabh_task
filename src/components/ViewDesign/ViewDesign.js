import React from 'react'
import './ViewDesign.css'
import user from "../../assets/user.png";
function Clip() {
    return (
        <div className="clip viewItem-more">
        <div className="grid-icons">
            <a className="btn1">OFFER TRADE</a>
            <a className="btn2"> VIEW</a>
        </div>
        </div>
    )
}

function ViewDesign() {
    return (
    <div id="ViewDesign" className="offer-page1">
            { document.body.style.overflowY = 'hidden' }
            <div className="offer-popup1">
                    <a className="close-btn" onClick = {() => {
                        document.getElementById('ViewDesign').style.cssText = 'display: none;';
                        document.body.style.overflowY = 'auto';
                    }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.52027 0.442584C1.1432 -0.910325 -0.910325 1.1432 0.442584 2.52027L6.94138 8.9949L0.442584 15.4937C-0.910325 16.8466 1.1432 18.9243 2.52027 17.5472L8.9949 11.0726L15.4937 17.5472C16.8466 18.9243 18.9243 16.8466 17.5472 15.4937L11.0726 8.9949L17.5472 2.52027C18.9243 1.1432 16.8466 -0.910325 15.4937 0.442584L8.9949 6.94138L2.52027 0.442584Z" fill="#000000"/>
                        </svg>
                    </a>
                <div className="whiteArea1">
                    <div className="SelectedDesignview">
                        <div className="SelectedDesignview-flex">
                        <h1>Design id: <span className="lightText">csajdbkjsfhjew</span></h1>
                        <h2>Created: <span  className="lightText">10.13.2021</span></h2>
                        </div>
                        <div className="SelectedDesignview-img">
                        </div>
                    </div>

                    <div className="SelectedDesignview-mobile">
                        <h1>Design id: <span className="lightText">csajdbkjsfhjew</span></h1>
                        <div className="SelectedDesignview-img">
                        </div>
                        <h2>Created: <span  className="lightText">10.13.2021</span></h2>
                    </div>

                    <div className="SelectedDesignDetails">
                        <div className="details-flex">
                            <div className="designHeader">
                                <h1>Flying Person</h1>
                                <h2>7th Edition</h2>
                            </div>
                            <div className="personDetail">
                                <img src={user} alt="" />
                                <h1>Ank12355</h1>
                                <a>ADD FRIEND</a>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
                        <div className="SelectedDesignDetails-flex">
                            <a>OFFER TRADE</a>
                            <p>(4 Trades Left)</p>
                            <h5>Buy more trade tokens</h5>
                        </div>
                        <h4>More Designs</h4>
                        <div className="SelectedDesignDetails-grid">
                            <Clip />
                            <Clip />
                            <Clip />
                        </div>
                    </div>

                    <div className="SelectedDesignDetails-mobile">
                        <div className="details-flex">
                            <div className="designHeader">
                                <h1>Flying Person</h1>
                                <h2>7th Edition</h2>
                            </div>
                            
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
                        <div className="SelectedDesignDetails-flex">
                            <a>OFFER TRADE</a>
                            <p>(4 Trades Left)</p>
                            <h5>Buy more trade tokens</h5>
                        </div>
                        <div className="personDetail">
                                <img src={user} alt="" />
                                <h1>Ank12355</h1>
                                <a>ADD FRIEND</a>
                            </div>
                        <h4>More Designs</h4>
                        <div className="SelectedDesignDetails-grid">
                            <Clip />
                            <Clip />
                            <Clip />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-area">
            </div>
        </div>
    )
}

export default ViewDesign
