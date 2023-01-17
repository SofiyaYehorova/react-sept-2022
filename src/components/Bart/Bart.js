import React from 'react';

export const Bart=()=>{
    let url=`https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png`

    return (
        <div>
            <p>name: {`Bartholomew JoJo Simpson`} <br/> age: {10} <br/> status: {`alive`} <br/> gender: {`male`}</p>
            <img src={url} alt={`Bartholomew JoJo Simpson`}/>

        </div>
    );
}
