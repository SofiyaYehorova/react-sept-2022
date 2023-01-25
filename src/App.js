import {useEffect, useState} from "react";

import {Cars, CarsForm} from "./components";
import {carsService} from "./services";

function App() {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(()=>{
        carsService.getAll().then(({data})=>setCars([...data]))
    },[])


    return (
        <div className="App">
            <CarsForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar}/>
        </div>
    );
}

export {
    App
};
