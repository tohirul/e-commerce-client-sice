import React from "react";
import "./LeftFooter.css";
import PlayStore from "../../../../Media/StoreImages/PlayStore.png";
import AppStore from "../../../../Media/StoreImages/AppStore.png";

const LeftFooter = () => {
    return (
        <div className="leftFooter">
            <h4>Download Our App</h4>
            <img src={PlayStore} alt="Play store" />
            <img src={AppStore} alt="App store" />
        </div>
    );
};

export default LeftFooter;
