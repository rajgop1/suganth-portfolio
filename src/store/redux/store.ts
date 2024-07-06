import { configureStore } from "@reduxjs/toolkit";
import screenTypeReducer from "./screen-type"
export const store = configureStore({
    reducer: {
        screenType: screenTypeReducer
    }
})