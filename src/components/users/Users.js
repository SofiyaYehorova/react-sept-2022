import React, {useState} from 'react';
import User from "../user/User";

function Users() {
    let [users, setUsers] = useState([]);

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response=>response.json())
        .then(data=>{
            setUsers(data);
        });

    return (
        <div>
            {
                users.map((user, index)=>(<User item={user} key={index}/>))
            }
        </div>
    );
}

export default Users;