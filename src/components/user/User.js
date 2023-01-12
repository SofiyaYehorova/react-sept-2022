import React from 'react';

const User = (props) => {
    let {item: user, lift} = props;
    return (
        <div>
            <h3>{user.id} {user.name}</h3>
            <p>{user.address.city} <br/> {user.email}</p>

            <button onClick={() => {
                lift(user)
            }}>DETAILS</button>
        </div>
    );
};

export default User;