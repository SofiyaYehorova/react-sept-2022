import React from 'react';

function Character(props) {
    let {item:person} = props;
    return (
        <div className="Container">
            <h3> {person.id} <br/> {person.name} <br/> {person.status} <br/> {person.species} <br/> {person.gender}</h3>
            <img src={person.image} alt={person.name}/>
        </div>
    );
}

export {Character};