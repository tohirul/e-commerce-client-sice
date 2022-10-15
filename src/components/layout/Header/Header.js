import React from "react";
import "./Header.css";
import TopNav from "./TopNav/TopNav";
import Navbar from "./Navbar/Navbar";
import BotNav from "./BotNav/BotNav";
import Carousel from "./Carousel/Carousel";

const Header = () => {
    return (
        <div className="header">
            <TopNav />
            <Navbar />
            <BotNav />
            <Carousel />
        </div>
    );
};

export default Header;
