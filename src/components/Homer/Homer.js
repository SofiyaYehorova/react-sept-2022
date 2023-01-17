import React from 'react';

export const Homer=()=> {
    let url=`https://static.simpsonswiki.com/images/b/bd/Homer_Simpson.png`;

    return (
        <div>
            <p>name: {`Homer Simpson`} <br/>age:{39} <br/> status: {`alive`} <br/>
            gender: {`male`}</p>
            <img src={url} alt={`homer`}/>
        </div>
    );
}
