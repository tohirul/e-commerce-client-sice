import React, { useEffect, useState } from "react";
import "./Carousel.css";
import carouselImages from "./carouselImages";
import { slideImages } from "./../../../../Hooks/slideImages";

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        slideImages(current, setCurrent, carouselImages);
    }, [current]);
    return (
        <div className="carousel">
            <div className="slider">
                <img src={carouselImages[current]} alt="carousel" />
            </div>
            <div className="overlay"></div>
        </div>
    );
};

export default Carousel;
