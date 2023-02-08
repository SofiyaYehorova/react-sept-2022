import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slice";

let rootReducer = combineReducers({
    users: userReducer
});

let setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
}
