import React from 'react'
import './Cart.css'

function Clip() {
    return (
        <div className="clip">
        <div className="grid-icons">
            <a className="btn1" onClick = {() => {
                document.getElementById('View-product-popup').style.cssText = 'display: block;';
                document.body.style.overflowY = 'hidden';
            }}>OFFER TRADE</a>
            <a className="btn2"> VIEW</a>
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
