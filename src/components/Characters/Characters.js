import React, {useState} from 'react';

import {Character} from "../Character/Character";

export const Characters=()=> {
    let [characters, setCharacters] = useState([]);

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(response=>response.json())
        .then(person=>{
            setCharacters(person.results.splice(0, 6));


        });

    return (
        <div className="Wrap">
            {
                characters.map((character, index)=>(<Character item={character} key={index}/>))
            }
        </div>
    );
}