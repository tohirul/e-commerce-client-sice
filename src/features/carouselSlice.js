import { createSlice } from "@reduxjs/toolkit";
import carouselImages from "./../components/layout/Header/Carousel/carouselImages";

const initialState = {
    carouselImages: carouselImages,
    i: 0,
};

const carouselSlice = createSlice({
    name: "runCarousel",
    initialState,
    reducers: {
        triggerCarousel: (state, action) => {},
    },
});

export const { triggerCarousel } = carouselSlice.actions;
export default carouselSlice.reducer;
