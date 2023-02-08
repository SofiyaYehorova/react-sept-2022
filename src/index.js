import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import {setUpStore} from "./redux";
import {App} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let store = setUpStore();
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);
