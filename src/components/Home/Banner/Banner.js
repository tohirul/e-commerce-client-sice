import React, { useEffect, useState } from "react";

import "./Banner.css";
import { slideImages } from "./../../../Hooks/slideImages";
import { bannerImages } from "./bannerImages";

const Banner = () => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        slideImages(current, setCurrent, bannerImages);
    }, [current]);
    return (
        <div className="banner">
            <div className="event-banner">
                <img src={bannerImages[current]} alt="Event Banner" />
            </div>
            <div className="overlay"></div>
        </div>
    );
};

export default Banner;
