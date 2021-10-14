import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LevelFeeReduction from './LevelFeeReduction';
import PasswordEmail from './PasswordEmail';
import './Settings.css'
import SettingsAccount from './SettingsAccount'
import Wallet from './Wallet';

function Settings() {
    return (
        <div className="settings-complete-page">
            <Router>
            <div className="Settings-page">
                <div className="SettingsTitle">
                    <h1>Settings</h1>
                    <div className="line">
                    </div>
                </div>
                <div className="settings-grid">
                <Switch>
                <Route path="/Verification">
                    <div className="SettingsNavBar-list">
                        <Link to="/" className="navButtons">Account</Link>
                        <Link to="/PasswordEmail"  className="navButtons">Password & Email</Link>
                        <Link to="/LevelFeeReduction"  className="navButtons">Level & Fee Reduction</Link>
                        <Link to="/YourSubscriptionPlan"  className="navButtons" >Your Subscription Plan</Link>
                        <Link to="/Wallet"  className="navButtons" >Wallet & Add Funds</Link>
                        <Link to="/Verification"  className="navButtons" id="Active1">Verification</Link>
                    </div>
                    <div className="Settings-content">
                    </div>
                </Route>
                <Route path="/Wallet">
                    <div className="SettingsNavBar-list">
                        <Link to="/" className="navButtons">Account</Link>
                        <Link to="/PasswordEmail"  className="navButtons">Password & Email</Link>
                        <Link to="/LevelFeeReduction"  className="navButtons">Level & Fee Reduction</Link>
                        <Link to="/YourSubscriptionPlan"  className="navButtons" >Your Subscription Plan</Link>
                        <Link to="/Wallet"  className="navButtons" id="Active1" >Wallet & Add Funds</Link>
                        <Link to="/Verification"  className="navButtons">Verification</Link>
                    </div>
                    <div className="Settings-content">
                        <Wallet />
                    </div>
                </Route>
                <Route path="/YourSubscriptionPlan">
                    <div className="SettingsNavBar-list">
                        <Link to="/" className="navButtons">Account</Link>
                        <Link to="/PasswordEmail"  className="navButtons">Password & Email</Link>
                        <Link to="/LevelFeeReduction"  className="navButtons">Level & Fee Reduction</Link>
                        <Link to="/YourSubscriptionPlan"  className="navButtons"  id="Active1">Your Subscription Plan</Link>
                        <Link to="/Wallet"  className="navButtons">Wallet & Add Funds</Link>
                        <Link to="/Verification"  className="navButtons">Verification</Link>
                    </div>
                    <div className="Settings-content">
                    </div>
                </Route>
                <Route path="/LevelFeeReduction">
                    <div className="SettingsNavBar-list">
                        <Link to="/" className="navButtons">Account</Link>
                        <Link to="/PasswordEmail"  className="navButtons">Password & Email</Link>
                        <Link to="/LevelFeeReduction"  className="navButtons"  id="Active1">Level & Fee Reduction</Link>
                        <Link to="/YourSubscriptionPlan"  className="navButtons">Your Subscription Plan</Link>
                        <Link to="/Wallet"  className="navButtons">Wallet & Add Funds</Link>
                        <Link to="/Verification"  className="navButtons">Verification</Link>
                    </div>
                    <div className="Settings-content">
                        <LevelFeeReduction />
                    </div>
                </Route>
                <Route path="/PasswordEmail">
                    <div className="SettingsNavBar-list">
                        <Link to="/" className="navButtons">Account</Link>
                        <Link to="/PasswordEmail"  className="navButtons"  id="Active1">Password & Email</Link>
                        <Link to="/LevelFeeReduction"  className="navButtons">Level & Fee Reduction</Link>
                        <Link to="/YourSubscriptionPlan"  className="navButtons">Your Subscription Plan</Link>
                        <Link to="/Wallet"  className="navButtons">Wallet & Add Funds</Link>
                        <Link to="/Verification"  className="navButtons">Verification</Link>
                    </div>
                    <div className="Settings-content">
                        <PasswordEmail />
                    </div>
                </Route>
                <Route path="/">
                    <div className="SettingsNavBar-list">
                        <Link to="/" className="navButtons" id="Active1">Account</Link>
                        <Link to="/PasswordEmail"  className="navButtons">Password & Email</Link>
                        <Link to="/LevelFeeReduction"  className="navButtons">Level & Fee Reduction</Link>
                        <Link to="/YourSubscriptionPlan"  className="navButtons">Your Subscription Plan</Link>
                        <Link to="/Wallet"  className="navButtons">Wallet & Add Funds</Link>
                        <Link to="/Verification"  className="navButtons">Verification</Link>
                    </div>
                    <div className="Settings-content">
                        <SettingsAccount />
                    </div>
                </Route>
                </Switch>
                </div>
            </div>
            </Router>
        </div>
    )
}

export default Settings
