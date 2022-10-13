import React from "react";
import "./Header.css";
import TopNav from "./TopNav/TopNav";
import Navbar from "./Navbar/Navbar";
import BotNav from "./BotNav/BotNav";
// import Slider from "./Slider/Slider";
import Carousel from "./Carousel/Carousel";

const Header = () => {
    return (
        <div className="header">
            <TopNav />
            <Navbar />
            <BotNav />
            {/* <Slider /> */}
            <Carousel />
        </div>
    );
};

export default Header;

/* 
 "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^14.4.3",

*/
