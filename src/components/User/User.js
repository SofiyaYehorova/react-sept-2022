import React from 'react';

const User = ({user, setUserId}) => {


    let {id, name, email, address} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>city:{address.city}</div>
            <button onClick={() => setUserId(id)}>Post</button>
        </div>
    );
};

export {
    User
};