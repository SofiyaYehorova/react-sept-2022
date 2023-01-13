import {useEffect, useState} from "react";
import {getUsers} from "../services/api.service";
import User from "../user/User";


const Users = () => {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    let elevator = (obj) => {
        setUser(obj);
    }


    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, []);

    return (
        <div>

            {users.map((user, index) => <User
                item={user} key={index} lift={elevator}/>)}
            <p>{JSON.stringify(user)}</p>
        </div>
    )
};

export {Users};