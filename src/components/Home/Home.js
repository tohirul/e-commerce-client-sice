import React, { Fragment } from "react";
import Banner from "./Banner/Banner.js";
import MostVisited from "./MostVisited/MostVisited";
import "./Home.css";
import Waves from "../Waves/Waves.js";

const Home = () => {
    return (
        <Fragment>
            <Banner />
            <MostVisited />
            <Waves />
        </Fragment>
    );
};

export default Home;
