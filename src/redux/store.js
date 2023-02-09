import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReduces} from "./slice/carSlice";

const rootReducer = combineReducers({
    cars: carReduces
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
}