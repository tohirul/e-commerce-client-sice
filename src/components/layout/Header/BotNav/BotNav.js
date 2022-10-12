import React from "react";
import "./BotNav.css";
import { FaShoppingCart } from "react-icons/fa";

const BotNav = () => {
    return (
        <div className="bottom-nav">
            <div className="category">
                <ul>
                    <li>
                        <p>Select Category</p>
                    </li>
                </ul>
                <ul style={{ display: "none" }}>
                    <li>
                        <p>Men</p>
                    </li>
                    <li>
                        <p>Women</p>
                    </li>
                    <li>
                        <p>Accessories</p>
                    </li>
                    <li>
                        <p>Electronics</p>
                    </li>
                    <li>
                        <p>Footwear</p>
                    </li>
                    <li>
                        <p>Sports</p>
                    </li>
                </ul>
            </div>
            <div className="search-bar">
                <input type="text" className="search-input" />
            </div>
            <div className="cart-options">
                <div className="cart-icon">
                    <div className="item-count">
                        <span>0</span>
                    </div>
                    <FaShoppingCart size={35} />
                </div>

                <div className="cart">
                    <span>Shopping Cart</span>
                    <br />
                    <span>Total: &nbsp; $0.00</span>
                </div>
            </div>
        </div>
    );
};

export default BotNav;
