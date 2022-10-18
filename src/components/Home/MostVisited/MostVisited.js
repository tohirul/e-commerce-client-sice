import React from "react";
import { mostVisitedData } from "./mostVisitedData";
import "./MostVisited.css";
import MVCard from "./MVCard";

const MostVisited = () => {
    console.log(mostVisitedData);
    return (
        <div className="most-visited">
            <div className="grid">
                {mostVisitedData.map((mvData, idx) => (
                    <MVCard key={idx} cardData={mvData} />
                ))}
            </div>
        </div>
    );
};

export default MostVisited;
