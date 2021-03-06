import React from 'react'
import './AlertTrade.css'

function AlertTrade() {
    return (
        <div className="AlertTrade"> 
            <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7659 14.4126L14.7711 13.1968C14.0416 12.2905 13.6216 11.1632 13.6216 9.99158V7.73684C13.6216 5.0621 11.7427 2.80737 9.22269 2.25474V1.19368C9.22269 0.530526 8.69216 0 8.02901 0C7.36585 0 6.83532 0.530526 6.83532 1.19368V2.25474C4.31532 2.80737 2.43638 5.04 2.43638 7.73684V9.99158C2.43638 11.1632 2.03848 12.2905 1.2869 13.1968L0.292165 14.4126C-0.393098 15.2526 0.203744 16.5347 1.2869 16.5347H14.749C15.8543 16.5347 16.4511 15.2526 15.7659 14.4126Z" fill="#D82666"/>
                <path d="M8.02993 21C9.62151 21 10.9036 19.7179 10.9036 18.1263H5.15625C5.15625 19.7179 6.43836 21 8.02993 21Z" fill="#D82666"/>
            </svg>
            <h1>You have <span className="PinkAlert">12 trade offers!</span></h1>
        </div>
    )
}

export default AlertTrade
