import React from 'react'
import './Upload.css'
import './EditDesign.css'

function EditDesign() {
    return (
        <div id="Edit-page-id" className="Edit-page">
            <div className="edit-popup">
                <a className="close-btn" onClick = {() => {
                    document.getElementById('Edit-page-id').style.cssText = 'display: none;';
                    document.body.style.overflowY = 'auto';
                }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.52027 0.442584C1.1432 -0.910325 -0.910325 1.1432 0.442584 2.52027L6.94138 8.9949L0.442584 15.4937C-0.910325 16.8466 1.1432 18.9243 2.52027 17.5472L8.9949 11.0726L15.4937 17.5472C16.8466 18.9243 18.9243 16.8466 17.5472 15.4937L11.0726 8.9949L17.5472 2.52027C18.9243 1.1432 16.8466 -0.910325 15.4937 0.442584L8.9949 6.94138L2.52027 0.442584Z" fill="#383838"/>
                </svg>
                </a>
                <div className="upload-grid-2">
                    <h1>Edit Design</h1>
                    <input type="text" placeholder="Name Your Design" />
                    <select>
                        <option value="C++">Edition</option>
                    </select>
                    <select>
                        <option value="C++">Category</option>
                    </select>
                    <input type="text" placeholder="dd/mm/yyyy" />
                    <textarea placeholder="Design Desciption" className="wideArea" />
                    <div className="popup-btn">
                        <p className="btn-dark">CANCEL</p>
                        <p className= "btn-blue">Save</p>
                        <p className= "text-white-delete">Delete</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditDesign
