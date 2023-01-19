import React, {useEffect, useState} from 'react';

import {SpaceShip} from "../SpaceShip/SpaceShip";
import {shipService} from "../../services";

import style from './SpaceShips.css'


const SpaceShips = () => {

    const [ships, setShips] = useState([]);

    useEffect(() => {
        shipService.getAll().then(value => setShips(value.data.filter(value => value.launch_year !== '2020')));
    }, [])

    return (
        <div className={"Ships"}>
            {
                ships.map((ship, index) => <SpaceShip key={index} ship={ship}/>)
            }
        </div>
    );
};

export {
    SpaceShips
};