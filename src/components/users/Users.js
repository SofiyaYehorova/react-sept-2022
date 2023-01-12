import React, {useEffect, useState} from 'react';
import User from "../user/User";
import {getUsers} from "../sevices/user.api.service";
import {getUsersAxios} from "../sevices/user.api.axios.servise";


const Users = () => {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const elevator=(obj)=>{
        setUser(obj);
    }


    useEffect(()=>{

// getUsers().then(value => setUsers(value));
getUsersAxios().then(value=> setUsers(value.data))
    }, [])

    return (
        <div>
            <hr/>
            <h3>{user?.username}</h3>
            <hr/>
            {users.map((user, index)=>
                <User
                    item={user}
                    key={index}
                lift={elevator}
                />)}
        </div>
    );
};

export default Users;