import React, { useEffect, useState } from "react";

import "./Carousel.css";
import carouselImages from "./carouselImages";

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const next = (current + 1) % carouselImages.length;
        // console.log(next);
        const id = setTimeout(() => setCurrent(next), 3000);
        return () => clearTimeout(id);
    }, [current]);
    return (
        <div className="banner">
            <div className="slider">
                <img src={carouselImages[current]} alt="carousel" />
            </div>
            <div className="overlay"></div>
        </div>
    );
};

export default Carousel;
