import {UserForm, Users} from "./components";
import {useEffect, useState} from "react";
import {usersService} from "./services";
import {set} from "react-hook-form";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers([...data]))
    }, [])

    return (
        <div className="App">
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
}

export {
    App
}