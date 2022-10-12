import React from "react";
import "./Header.css";
import TopNav from "./TopNav/TopNav";
import Navbar from "./Navbar/Navbar";
import BotNav from "./BotNav/BotNav";
import Slider from "./Slider/Slider";

const Header = () => {
    return (
        <div className="header">
            <TopNav />
            <Navbar />
            <BotNav />
            <Slider />
        </div>
    );
};

export default Header;
