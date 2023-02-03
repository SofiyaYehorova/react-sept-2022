import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import {App} from './App';

export const MyContext = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyContext.Provider value={{name: 'Max', age: 4}}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </MyContext.Provider>
);
