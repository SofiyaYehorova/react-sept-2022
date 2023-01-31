import {useEffect, useState} from "react";

import {carService} from "./services";
import {CarForm, Cars} from "./componets";

function App() {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))
    }, []);

    return (
        <div className="App">
            <CarForm setCars={setCars} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
        </div>
    );
}

export {
    App
}