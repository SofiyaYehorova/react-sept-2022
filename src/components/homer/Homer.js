import React from 'react';

function Homer() {
    return (
        <div>
            <p>name: {`Homer Simpson`} <br/>age:{39} <br/> status: {`alive`} <br/>
            gender: {`male`}</p>
            <img src={`https://static.simpsonswiki.com/images/b/bd/Homer_Simpson.png`} alt={`homer`}/>
        </div>
    );
}

export default Homer;