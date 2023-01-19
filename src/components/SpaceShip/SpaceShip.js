import React from 'react';

import style from './SpaseShip.css';

const SpaceShip = ({ship}) => {
    const {mission_name, launch_year, links} = ship;

    return (
        <div className={"Ship"}>
            <div>"mission_name": {mission_name}</div>
            <div> "launch_year":{launch_year}</div>
            <div>
                <img src={links.mission_patch_small} alt={mission_name}/>
                </div>
        </div>
    );
};

export {
    SpaceShip
};