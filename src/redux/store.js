import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {commentReducer, postReducer} from "./slice";

const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
}