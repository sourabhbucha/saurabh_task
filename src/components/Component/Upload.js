import React from 'react'
import './Upload.css'

function Upload() {
    return (
        <div id="Upload-page-id" className="Upload-page">
            <div className="upload-popup">
                <a className="close-btn" onClick = {() => {
                    document.getElementById('Upload-page-id').style.cssText = 'display: none;';
                    document.body.style.overflowY = 'auto';
                }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.52027 0.442584C1.1432 -0.910325 -0.910325 1.1432 0.442584 2.52027L6.94138 8.9949L0.442584 15.4937C-0.910325 16.8466 1.1432 18.9243 2.52027 17.5472L8.9949 11.0726L15.4937 17.5472C16.8466 18.9243 18.9243 16.8466 17.5472 15.4937L11.0726 8.9949L17.5472 2.52027C18.9243 1.1432 16.8466 -0.910325 15.4937 0.442584L8.9949 6.94138L2.52027 0.442584Z" fill="#383838"/>
                </svg>
                </a>
                <div className="upload-grid-1">
                    <h1>Upload Your Design</h1>
                    <p>.jpg, .png, gif.</p>
                    <div className="dropbox">
                        <svg width="64" height="59" viewBox="0 0 64 59" fill="none" xmlns="http://www.w3.org/2000/svg" className="folder-upload">
                            <path d="M5.33333 10.6668C2.38773 10.6668 0 13.0668 0 16.0001V53.3334C0 56.2668 2.38781 58.6668 5.33333 58.6668H58.6667C61.6133 58.6668 64 56.2668 64 53.3334V16.0001C64 13.0668 61.6133 10.6668 58.6667 10.6668H5.33333Z" fill="#3E7EE9"/>
                            <path d="M7.99984 0C5.05424 0 2.6665 2.4 2.6665 5.33333V42.6667C2.6665 45.6 5.05424 48 7.99984 48H37.3332H50.6665H55.9998C58.9465 48 61.3332 45.6 61.3332 42.6667V18.6667V10.6667C61.3332 7.73333 58.9465 5.33333 55.9998 5.33333H50.6665H37.3332H34.6665L26.6665 0H7.99984Z" fill="#0053DE"/>
                            <path d="M61.3332 34.6667V13.3333C61.3332 10.4 58.9465 8 55.9998 8H26.6665H13.3332H7.99984C5.05424 8 2.6665 10.4 2.6665 13.3333V34.6667H61.3332Z" fill="#E1E1E1"/>
                            <path d="M5.33333 10.6668C2.38773 10.6668 0 13.0668 0 16.0001V32.0001V34.6668V50.6668C0 53.6001 2.38781 56.0001 5.33333 56.0001H58.6667C61.6133 56.0001 64 53.6001 64 50.6668V34.6668V32.0001V16.0001C64 13.0668 61.6133 10.6668 58.6667 10.6668H5.33333Z" fill="#6AA0FB"/>
                        </svg>
                        <p>Drag & Drop Your Design Here</p>
                        <p>(max size 4 mb, .gif duration 3 sec)</p>
                    </div>
                </div>
                <div className="upload-grid-2">
                    <input type="text" placeholder="Name Your Design" />
                    <select>
                        <option value="C++">Category</option>
                    </select>
                    <select>
                        <option value="C++">Category</option>
                    </select>
                    <input type="text" placeholder="dd/mm/yyyy" />
                    <textarea placeholder="Design Desciption" className="wideArea" />
                    <div className="popup-btn">
                        <p className="btn-dark">CANCEL</p>
                        <p className= "btn-blue">CONFIRM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
