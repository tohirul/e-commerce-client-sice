import React from "react";
import "./BotNav.css";
import CartOptions from "./CartOptions";
import Category from "./Category";
import SearchBar from "./SearchBar";

const BotNav = () => {
    return (
        <div className="bottom-nav">
            <Category />
            <SearchBar />
            <CartOptions />
        </div>
    );
};

export default BotNav;
