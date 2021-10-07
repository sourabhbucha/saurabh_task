import React from 'react'
import user from "../../assets/user.png";
import './FriendsNotifications.css'

function Friend() {
    return (
        <div className="friend">
            <img src={user} alt="" />
            <div className="friend-detail">
                <h1>Ankit1234</h1>
                <a className="online-status-friends">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="3.5" r="3.5" fill="#3DCE25"/>
                    </svg>
                    Ankit2213 is Online
                </a>
            </div>
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="delete-friend">
                <path d="M14 6.967L13.0257 8.68884L1.20807 1.72184L2.18232 0L5.14405 1.74175L6.46903 1.37349L10.6875 3.86171L11.048 5.22525L14 6.967ZM0 17.0094V5.066H4.93946L11.691 9.04715V17.0094C11.691 17.5374 11.4857 18.0437 11.1203 18.417C10.7549 18.7903 10.2593 19 9.74252 19H1.9485C1.43173 19 0.936119 18.7903 0.570703 18.417C0.205288 18.0437 0 17.5374 0 17.0094Z" fill="#1F1F2F"/>
            </svg>
        </div>
    )    
}

function NotificationMsg(){
    return(
        <div className="notificationMsg">
            <div className="title-notificationBox">
                <h1>Ankit1234 want to trade with you</h1>
                <p>He is offering his <span className="text-blue"> gem design </span> for your <span className="text-pink"> diamond back design </span></p>
            </div>
            <div className="flex-notificationBox">
                <div className="timestamp">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12.6C10.08 12.6 12.6 10.08 12.6 7C12.6 3.92 10.08 1.4 7 1.4C3.92 1.4 1.4 3.92 1.4 7C1.4 10.08 3.92 12.6 7 12.6ZM7 0C10.85 0 14 3.15 14 7C14 10.85 10.85 14 7 14C3.15 14 0 10.85 0 7C0 3.15 3.15 0 7 0ZM7.35 7.56L3.99 9.52L3.5 8.54L6.3 6.93V3.5H7.35V7.56Z" fill="#999999"/>
                    </svg>
                    <p>24 Nov 2018 at 9:30 am</p>
                </div>
                <p>VIEW</p>
            </div>
        </div>
    )
}

function FriendRequest(){
    return(
        <div className="friendrequest">
            <div className="title-friendrequest">
                <div className="title-flex-friendrequest">
                    <h1> <span className="text-blue">Ankit1234 </span> wants to be your friend</h1>
                    <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 6.967L13.0257 8.68884L1.20807 1.72184L2.18232 0L5.14405 1.74175L6.46903 1.37349L10.6875 3.86171L11.048 5.22525L14 6.967ZM0 17.0094V5.066H4.93946L11.691 9.04715V17.0094C11.691 17.5374 11.4857 18.0437 11.1203 18.417C10.7549 18.7903 10.2593 19 9.74252 19H1.9485C1.43173 19 0.936119 18.7903 0.570703 18.417C0.205288 18.0437 0 17.5374 0 17.0094Z" fill="#1F1F2F"/>
                    </svg>
                </div>
                <div className="timestamp-friendrequest">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12.6C10.08 12.6 12.6 10.08 12.6 7C12.6 3.92 10.08 1.4 7 1.4C3.92 1.4 1.4 3.92 1.4 7C1.4 10.08 3.92 12.6 7 12.6ZM7 0C10.85 0 14 3.15 14 7C14 10.85 10.85 14 7 14C3.15 14 0 10.85 0 7C0 3.15 3.15 0 7 0ZM7.35 7.56L3.99 9.52L3.5 8.54L6.3 6.93V3.5H7.35V7.56Z" fill="#999999"/>
                    </svg>
                    <p>24 Nov 2018 at 9:30 am</p>
                </div>
            </div>
            <div className="flex-friendrequest">
                <p className="friendrequest-accept">ACCEPT</p>
                <p className="friendrequest-reject">REJECT</p>
            </div>
        </div>

    )
}

function FriendsNotifications() {
    return (
        <div className="FriendsNotifications">
            <div className="friends">
                <div className="friends-flex-options">
                    <h1>Friends (123)</h1>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="friends-list">
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                </div>
                <div className="bottom-view-nav">
                    <a href="" className="friend-nav">First</a>
                    <a href="" className="friend-nav">{'<'}</a>
                    <a href="" className="friend-nav">1</a>
                    <a href="" className="friend-nav">2</a>
                    <a href="" className="friend-nav">3</a>
                    <a href="" className="friend-nav">{'>'}</a>
                    <a href="" className="friend-nav">Last</a>
                </div>
            </div>


            <div className="Notification">
                <div className="friends-flex-options">
                    <h1>Notifications</h1>
                </div>
                <div className="notificationBox">
                    <NotificationMsg />
                    <NotificationMsg />
                    <NotificationMsg />
                    <NotificationMsg />
                    <div className="bottom-view-nav">
                        <a href="" className="friend-nav">First</a>
                        <a href="" className="friend-nav">{'<'}</a>
                        <a href="" className="friend-nav">1</a>
                        <a href="" className="friend-nav">2</a>
                        <a href="" className="friend-nav">3</a>
                        <a href="" className="friend-nav">{'>'}</a>
                        <a href="" className="friend-nav">Last</a>
                    </div>

                    <div className="friendRequest">
                        <div className="flex-friendRequest">
                            <h1 className="title">Friend Requests</h1>
                            <div className="group">
                                <input type="text" className="search" placeholder="Search by name" />
                                <select className="sort">
                                    <option value="C++">Newest</option>
                                </select>
                            </div>
                        </div>

                        <div className="requestgrid">
                            <FriendRequest />
                            <FriendRequest />
                            <FriendRequest />
                            <FriendRequest />
                            <FriendRequest />
                            <FriendRequest />
                        </div>

                        <div className="bottom-view-nav">
                            <a href="" className="friend-nav">First</a>
                            <a href="" className="friend-nav">{'<'}</a>
                            <a href="" className="friend-nav">1</a>
                            <a href="" className="friend-nav">2</a>
                            <a href="" className="friend-nav">3</a>
                            <a href="" className="friend-nav">{'>'}</a>
                            <a href="" className="friend-nav">Last</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsNotifications
