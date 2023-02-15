import React from 'react';
import {useSelector} from "react-redux";

import {Cars, Form} from "../../components";

const CarsPage = () => {

    const {loading} = useSelector(state => state.cars);
    return (
        <div>
            <Form/>
            <hr/>
            {loading &&
                <div><h2>Loading..........</h2></div>}
            <Cars/>
        </div>
    );
}

export {
    CarsPage
};