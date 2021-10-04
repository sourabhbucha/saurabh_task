import React from 'react'
import './Cart.css'

function Clip() {
    return (
        <div className="clip">
        <div className="grid-icons">
            <a href="" className="btn1 trade" id="trade">PUT FOR AUCTION</a>
            <a href="" className="btn2 view" id="view">EDIT</a>
        </div>
        </div>
    )
}

function Cart() {
    return (
        <div className="Cart">
            <div className="flex">
            <h1 className="title">Ankit’s Inventory</h1>
            <div className="group">
            <input type="text" className="search" placeholder="Search" />
            <select className="sort">
                <option value="C++">Newest</option>
            </select>
            <a className="Upload" id="4" onClick = {() => {
                document.getElementById('Upload-page-id').style.cssText = 'display: block;';
                document.body.style.overflowY = 'hidden';
            }}>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.45978 14.7273H2.46498C2.76887 14.7273 3.00264 14.9611 3.00264 15.265V15.8026C3.00264 16.1065 3.23641 16.3403 3.5403 16.3403H17.0052C17.3091 16.3403 17.5429 16.1065 17.5429 15.8026V15.265C17.5429 14.9611 17.7767 14.7273 18.0806 14.7273H19.0858C19.3897 14.7273 19.6234 14.9611 19.6234 15.265V16.3871C19.6234 17.2754 18.8987 18 18.0104 18H2.53511C1.64679 18 0.922119 17.2754 0.922119 16.3871V15.265C0.922119 14.9611 1.15589 14.7273 1.45978 14.7273Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35043 6.42857L7.23354 6.31169L6.9764 6.28831L3.93744 6.42857C3.86731 6.42857 3.84393 6.33506 3.84393 6.26493C3.84393 6.1948 3.86731 6.12468 3.91406 6.07792L10.0154 0.0701299C10.0621 0.0233767 10.1556 0 10.2725 0C10.366 0 10.4595 0.0233767 10.5296 0.0701299L16.6309 6.07792C16.6777 6.12468 16.7011 6.1948 16.7011 6.26493C16.7011 6.33506 16.6777 6.42857 16.6076 6.42857L13.5686 6.28831L13.3115 6.31169L13.1946 6.42857L13.1011 14.3766C13.1011 14.7039 12.5634 14.9844 11.8855 14.9844H8.65952C7.9816 14.9844 7.44393 14.7039 7.44393 14.3766L7.35043 6.42857Z" fill="white"/>
                </svg> 
                <p>Upload New Design</p> 
            </a>
            </div>
            </div>
            <div className="grid-clip">
                <Clip />
                <Clip />
                <Clip />
                <Clip />
                <Clip />
                <Clip />
            </div>
            <div className="bottom-cart-nav">
                <a href="" className="cart-nav">First</a>
                <a href="" className="cart-nav">{'<'}</a>
                <a href="" className="cart-nav">1</a>
                <a href="" className="cart-nav">2</a>
                <a href="" className="cart-nav">3</a>
                <a href="" className="cart-nav">{'>'}</a>
                <a href="" className="cart-nav">Last</a>
            </div>
        </div>
    )
}

export default Cart
