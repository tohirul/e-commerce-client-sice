import React from "react";
import "./Footer.css";
import LeftFooter from "./LeftFooter/LeftFooter";
import MidFooter from "./MidFooter/MidFooter";
import RightFooter from "./RightFooter/RightFooter";

const Footer = () => {
    return (
        <footer id="footer">
            <LeftFooter />
            <MidFooter />
            <RightFooter />
        </footer>
    );
};

export default Footer;
