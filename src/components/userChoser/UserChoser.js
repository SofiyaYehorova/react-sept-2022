import React, {useEffect, useState} from 'react';
import {getUsers} from "../sevices/user.api.service";
import {getUserAxios, getUsersAxios} from "../sevices/user.api.axios.servise";

function UserChoser() {

    let [user, setUser] = useState(null);
    let [id, setId] = useState(1);


    const increment = () => {
        id++;
        setId(id);
    }

    const decrement = () => {
        id--;
        setId(id);
    }

    useEffect(() => {
        // console.log('effect');
        getUserAxios(id).then(({data}) =>
            setUser(data)
        )
    }, [id])
    return (
        <div>
            <div>{JSON.stringify(user)}</div>

            <button onClick={() => {
                decrement(id)
            }}>prev
            </button>

            <button onClick={() => {
                increment(id)
            }}>next
            </button>

        </div>
    );
}

export {UserChoser};