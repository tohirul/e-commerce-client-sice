import React from "react";
import "./Navbar.css";
import Logo from "../../../../Media/Logo/logo.png";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="Site Logo" />
            </div>
            <div className="nav-sec">
                <ul>
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                        <p>Products</p>
                    </li>
                    <li>
                        <p>About</p>
                    </li>
                    <li>
                        <p>Contact</p>
                    </li>
                    <li>
                        <p>On sale</p>
                    </li>
                    <li>
                        <p>My Account</p>
                    </li>
                    <li>
                        <p>Blog</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
