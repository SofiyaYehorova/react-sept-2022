import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";

function Users() {
const [users, setUsers] = useState([]);
const [user, setUser] = useState(null);
const elevator=(obj)=>{
    setUser(obj)
};

useEffect(()=>{
    userService.getAll().then(({data})=>setUsers(data))
},[]);

    return (
        <div >
            <hr/>
            {user && <div>{JSON.stringify(user)}</div>}
            <hr/>
            <div className="wrap">
                {
                    users.map(user=><User key={user.id} item={user} elevator={elevator}/>)
                }
            </div>

        </div>
    );
}

export {
    Users
};