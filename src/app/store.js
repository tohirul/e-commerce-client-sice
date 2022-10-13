import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "../features/carouselSlice";
import logger from "redux-logger";
const middleWares = [logger];

const store = configureStore({
    reducer: {
        runCarousel: carouselReducer,
        middleware: middleWares,
    },
});

export default store;
