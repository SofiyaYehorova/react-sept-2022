import React from 'react';

function Marge(props) {
    return (
        <div>
            <p>name: {`Marjorie B. Simpson`} <br/> age: {36} <br/> status: {`alive`} <br/> gender: {`female`}</p>
            <img src={`https://static.simpsonswiki.com/images/thumb/0/0b/Marge_Simpson.png/250px-Marge_Simpson.png`} alt={`Marjorie B. Simpson`}/>
        </div>
    );
}

export default Marge;