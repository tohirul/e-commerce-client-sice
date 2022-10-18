import React, { useEffect, useState } from "react";
import "./Banner.css";
import { slideImages } from "./../../../Hooks/slideImages";
import { bannerImages } from "./bannerImages";
import FemaleProducts from "../../../Media/Sale/Link-1.jpeg";
import maleProducts from "../../../Media/Sale/Link-2.jpeg";

const Banner = () => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        slideImages(current, setCurrent, bannerImages);
    }, [current]);
    return (
        <div className="banner-container">
            <div className="products-sale">
                <div className="sale-link">
                    <img src={FemaleProducts} alt="Female Products Sale" />
                </div>
                <div className="products-overlay">
                    <div className="sale-details">
                        <h2>35% Off,</h2>
                        <h3>on Winter products,</h3>
                        <p> till December.</p>
                        <button className="btn-sale">buy now!</button>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="event-banner">
                    <img src={bannerImages[current]} alt="Event Banner" />
                </div>
                <div className="overlay">
                    <div className="content">
                        <h3>New Event</h3>
                        <h4>Winter Collection</h4>
                        <p>All winter products are with up to 40% off.</p>
                        <button className="btn-shop">shop now</button>
                    </div>
                </div>
            </div>
            <div className="products-sale">
                <div className="sale-link">
                    <img src={maleProducts} alt="Male Products Sale" />
                </div>
                <div className="products-overlay">
                    <div className="sale-details">
                        <h2>25% Off,</h2>
                        <h3>on Winter products,</h3>
                        <p> till December.</p>
                        <button className="btn-sale">buy now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
