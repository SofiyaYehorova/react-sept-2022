import React from 'react';

export const Marge=()=> {
    let url=`https://static.simpsonswiki.com/images/thumb/0/0b/Marge_Simpson.png/250px-Marge_Simpson.png`;

    return (
        <div>
            <p>name: {`Marjorie B. Simpson`} <br/> age: {36} <br/> status: {`alive`} <br/> gender: {`female`}</p>
            <img src={url} alt={`Marjorie B. Simpson`}/>
        </div>
    );
}


