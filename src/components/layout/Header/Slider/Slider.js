import React from "react";
import slider from "../../../../Media/SliderImages/highcompress-slider_2.jpg";
import "./Slider.css";

const Slider = () => {
    return (
        <div className="slider-section">
            <img src={slider} alt="Slider" />
        </div>
    );
};

export default Slider;
