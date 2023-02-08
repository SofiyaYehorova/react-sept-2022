import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();

    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(() => {
        // usersService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h2>Loading.........</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {
    Users
};