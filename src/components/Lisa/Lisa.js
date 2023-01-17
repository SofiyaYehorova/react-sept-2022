import React from 'react';

export const Lisa=()=> {
    let url=`https://static.simpsonswiki.com/images/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png`;
    return (
        <div>
            <p>name: {`Lisa Marie Simpson`} <br/> age: {8} <br/> status: {`alive`} <br/> gender: {`female`}</p>
            <img src={url} alt={`Lisa Marie Simpson`}/>
        </div>
    );
}
