import React from 'react'
import './LevelFeeReduction.css'

function LevelFeeReduction() {
    return (
        <div className="LevelFeeReduction">
            <div className="Levelling">
                <h1>Levelling</h1>
                <div className="levellingFlex">
                    <a>YOUR LEVEL: 6</a>
                    <p>You need to trade 100 times to reach <span>level 7</span></p>
                </div>
            </div>
            <div className="AuctionFeeRedux">
                <h1>Auction Fee Reduction</h1>
                <div className="AuctionFeeReduxFlex">
                    <a>YOUR CURRENT FEE REDUCTION IS 6%</a>
                    <p>Your next level will make your auction <span>fee reduced by 7% </span></p>
                </div>
            </div>
        </div>
    )
}

export default LevelFeeReduction
