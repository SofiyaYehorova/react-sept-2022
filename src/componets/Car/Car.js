import React from 'react';

import {carService} from "../../services";

function Car({car, setUpdateCar, setCars}) {
    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setCars(cars => {
            const findIndex = cars.findIndex(value => value.id === id);
            cars.splice(findIndex, 1)
            return [...cars]
        })


    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => deleteCar()}>Delete</button>
        </div>
    );
}

export {
    Car
};