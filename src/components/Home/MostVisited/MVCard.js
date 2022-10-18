import React from "react";

const MVCard = (props) => {
    console.log(props);
    const { title, image } = props.cardData;
    return (
        <div className="mv-card el">
            <div className="image-container">
                <img src={image} alt="card" />
            </div>
            <div className="card-info">
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default MVCard;
