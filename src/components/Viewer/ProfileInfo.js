import React from 'react'
import './ProfileInfo.css'
function ProfileInfo() {
    return (
        <div className="ProfileInfo">
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="Camicon">
                <path d="M7.85714 0L6.28571 2.61905H15.7143L14.1429 0H7.85714ZM2.35714 3.14286C1.05129 3.14286 0 4.19414 0 5.5V15.9762C0 17.282 1.05129 18.3333 2.35714 18.3333H19.6429C20.9487 18.3333 22 17.282 22 15.9762V5.5C22 4.19414 20.9487 3.14286 19.6429 3.14286H2.35714ZM11 4.71429C14.3207 4.71429 17.0238 7.41746 17.0238 10.7381C17.0238 14.0587 14.3207 16.7619 11 16.7619C7.67936 16.7619 4.97619 14.0587 4.97619 10.7381C4.97619 7.41746 7.67936 4.71429 11 4.71429ZM18.5952 5.5C19.0292 5.5 19.381 5.85179 19.381 6.28571C19.381 6.71964 19.0292 7.07143 18.5952 7.07143C18.1613 7.07143 17.8095 6.71964 17.8095 6.28571C17.8095 5.85179 18.1613 5.5 18.5952 5.5ZM11 5.7619C8.24555 5.7619 6.02381 7.98362 6.02381 10.7381C6.02381 13.4926 8.24555 15.7143 11 15.7143C13.7545 15.7143 15.9762 13.4926 15.9762 10.7381C15.9762 7.98362 13.7545 5.7619 11 5.7619ZM11 7.07143C13.025 7.07143 14.6667 8.71306 14.6667 10.7381C14.6667 12.7631 13.025 14.4048 11 14.4048C8.97498 14.4048 7.33333 12.7631 7.33333 10.7381C7.33333 8.71306 8.97498 7.07143 11 7.07143Z" fill="white"/>
            </svg>

            <div className="flex-profile">
            <div className="ProfileDetail">
                <div className="ProfilePic">
                    <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 0L10 4.16667H25L22.5 0H12.5ZM3.75 5C1.6725 5 0 6.6725 0 8.75V25.4167C0 27.4942 1.6725 29.1667 3.75 29.1667H31.25C33.3275 29.1667 35 27.4942 35 25.4167V8.75C35 6.6725 33.3275 5 31.25 5H3.75ZM17.5 7.5C22.7829 7.5 27.0833 11.8005 27.0833 17.0833C27.0833 22.3662 22.7829 26.6667 17.5 26.6667C12.2172 26.6667 7.91667 22.3662 7.91667 17.0833C7.91667 11.8005 12.2172 7.5 17.5 7.5ZM29.5833 8.75C30.2737 8.75 30.8333 9.30967 30.8333 10C30.8333 10.6903 30.2737 11.25 29.5833 11.25C28.893 11.25 28.3333 10.6903 28.3333 10C28.3333 9.30967 28.893 8.75 29.5833 8.75ZM17.5 9.16667C13.1179 9.16667 9.58333 12.7012 9.58333 17.0833C9.58333 21.4655 13.1179 25 17.5 25C21.8822 25 25.4167 21.4655 25.4167 17.0833C25.4167 12.7012 21.8822 9.16667 17.5 9.16667ZM17.5 11.25C20.7216 11.25 23.3333 13.8617 23.3333 17.0833C23.3333 20.305 20.7216 22.9167 17.5 22.9167C14.2784 22.9167 11.6667 20.305 11.6667 17.0833C11.6667 13.8617 14.2784 11.25 17.5 11.25Z" fill="white"/>
                    </svg>
                </div>
                <div className="info">
                <a className="btn-share">
                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.22921 10.2438C8.87278 10.2438 8.54102 10.3571 8.26299 10.5502L3.49368 7.42604C3.52391 7.28898 3.54158 7.14666 3.54158 7C3.54158 6.82996 3.51821 6.66595 3.47791 6.50923L8.04791 3.27296C8.36156 3.57232 8.77509 3.75615 9.22921 3.75615C10.2058 3.75615 11 2.91352 11 1.87808C11 0.842323 10.2058 0 9.22921 0C8.25292 0 7.45842 0.842323 7.45842 1.87808C7.45842 1.99872 7.47011 2.11626 7.49099 2.23055L2.85163 5.51591C2.55214 5.27013 2.17775 5.12208 1.77079 5.12208C0.794204 5.12208 0 5.9644 0 7.00015C0 8.0356 0.794204 8.87823 1.77079 8.87823C2.20053 8.87823 2.59507 8.71438 2.90186 8.44336L7.56195 11.4958C7.4961 11.6919 7.45842 11.902 7.45842 12.1219C7.45842 13.1574 8.25292 14 9.22921 14C10.2058 14 11 13.1574 11 12.1219C11 11.0863 10.2058 10.2438 9.22921 10.2438Z" fill="white"/>
                    </svg>
                    Share
                </a>
                    <h1 className ="Name">Ankit Panda</h1>
                    <p className ="des">Member since 2021</p>
                    <div className="btn-grid">
                        <a href="" className="btn">MESSAGE</a>
                        <a href="" className="btn">ADD FRIEND</a>
                    </div>
                </div>
            </div>
            <div className="grp">
                <a href="" className="btn-white text-blue">YOUR LEVEL: 6</a>
            </div>
            </div>
        </div>
    )
}

export default ProfileInfo
