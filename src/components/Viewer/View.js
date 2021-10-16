import React from 'react'
import './View.css'

function View(props) {
    return (
        <div id="View-product-popup" className="view-page">
            <div className="view-popup">
                <a className="close-btn" onClick = {() => {
                    document.getElementById('View-product-popup').style.cssText = 'display: none;';
                    document.body.style.overflowY = 'auto';
                }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.52027 0.442584C1.1432 -0.910325 -0.910325 1.1432 0.442584 2.52027L6.94138 8.9949L0.442584 15.4937C-0.910325 16.8466 1.1432 18.9243 2.52027 17.5472L8.9949 11.0726L15.4937 17.5472C16.8466 18.9243 18.9243 16.8466 17.5472 15.4937L11.0726 8.9949L17.5472 2.52027C18.9243 1.1432 16.8466 -0.910325 15.4937 0.442584L8.9949 6.94138L2.52027 0.442584Z" fill="#383838"/>
                </svg>
                </a>
                <div className="view-grid">
                    <h1>Offer One of Your Design</h1>
                    <div className="viewGridImages">
                        <div className="flex-viewer">
                            <h1>Your Bag:</h1>
                            <div className="group-viewer">
                                <input type="text" className="search-viewer" placeholder="Search from bag" />
                                <select className="sort-viewer">
                                    <option>Level</option>
                                </select>
                            </div>
                        </div> 
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            <div className="img-viewer">
                                <div class="middle">
                                    <div class="text">Offer</div>
                                </div>
                            </div>
                            
                        <div className="bottom-view-nav">
                            <a href="" className="cart-nav">First</a>
                            <a href="" className="cart-nav">{'<'}</a>
                            <a href="" className="cart-nav">1</a>
                            <a href="" className="cart-nav">2</a>
                            <a href="" className="cart-nav">3</a>
                            <a href="" className="cart-nav">{'>'}</a>
                            <a href="" className="cart-nav">Last</a>
                        </div>
                    </div>
                    <div className="popup-btn-viewer">
                        <p className="btn-dark-viewer">OFFER TRADE</p>
                        <p className= {props.isOnline ? 'btn-blue-viewer ' : 'Offline btn-blue-viewer'}>LIVE TRADE REQUEST</p>
                        <a className="online-status">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3.5" cy="3.5" r="3.5" fill={props.isOnline ? "#3DCE25" : '#CE4E25'}/>
                            </svg>
                            Ankit2213 is {props.isOnline ? 'Online' : 'Offline'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
