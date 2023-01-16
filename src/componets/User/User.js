import React from 'react';

const User = (props) => {
    const {item:user, elevator} = props;
    return (
        <div className="contant">
            <h3>{user.id} {user.name}</h3>
            <button onClick={()=>elevator(user)}>MORE</button>
        </div>
    );
};

export  {
    User
};