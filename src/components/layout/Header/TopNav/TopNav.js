import React from "react";
import "./TopNav.css";
import {
    RiTwitterFill,
    RiFacebookFill,
    RiInstagramFill,
    RiRssFill,
} from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { CgLogIn } from "react-icons/cg";
const TopNav = () => {
    const icons = [RiTwitterFill, RiFacebookFill, RiInstagramFill, RiRssFill];

    return (
        <div className="top-nav">
            <div className="social-icons">
                <ul>
                    {icons.map((Icon, idx) => (
                        <li key={idx}>
                            <span className="social-icon">
                                <Icon />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="site-settings">
                <ul>
                    <li>
                        <div>
                            <FaGlobe />
                        </div>{" "}
                        &nbsp;
                        <p>Language</p>
                    </li>
                    <li>
                        <div>
                            <GiTwoCoins />
                        </div>{" "}
                        &nbsp;
                        <p>Currency</p>
                    </li>
                    <li>
                        <div>
                            <CgLogIn />
                        </div>{" "}
                        &nbsp;
                        <p>
                            <span>Sign In</span> / <span>Join</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopNav;
