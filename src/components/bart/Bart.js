import React from 'react';

function Bart() {
    return (
        <div>
            <p>name: {`Bartholomew JoJo Simpson`} <br/> age: {10} <br/> status: {`alive`} <br/> gender: {`male`}</p>
            <img src={`https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png`} alt={`Bartholomew JoJo Simpson`}/>
        </div>
    );
}

export default Bart;