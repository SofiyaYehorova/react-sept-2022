import React, {useEffect, useState} from 'react';

import {User} from "../User/User";
import {usersService} from "../../services";

const Users = ({setUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        usersService.getAll().then(({data}) => setUsers([...data]));
    }, [])



    return (
        <div>
            {
               users.map(user=><User user={user} key={user.id} setUserId={setUserId}/>)
            }
        </div>
    );
};

export {
    Users
};