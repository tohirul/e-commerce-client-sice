import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartOptions = () => {
    return (
        <div className="cart-options">
            <div className="cart-icon">
                <div className="item-count">
                    <span>10</span>
                </div>
                <FaShoppingCart size={35} />
            </div>

            <div className="cart">
                <span>Shopping Cart</span>
                <br />
                <span>Total: &nbsp; $0.00</span>
            </div>
        </div>
    );
};

export default CartOptions;
