import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slice/carSlice";

const rootReducer = combineReducers({
    cars: carReducer
});

const setUpStore = () => configureStore({
        reducer: rootReducer
    }
);

export {
    setUpStore
}