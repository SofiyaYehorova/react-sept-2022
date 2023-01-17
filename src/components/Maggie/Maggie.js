import React from 'react';

export const Maggie=()=> {
    let url = `https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png`;

    return (
        <div>
            <p>name: {`Margaret Lenny Simpson`} <br/> age: {1} <br/> status: {`alive`} <br/> gender: {`female`}</p>
            <img src={url} alt={`Margaret Lenny Simpson`}/>
        </div>
    );
}
