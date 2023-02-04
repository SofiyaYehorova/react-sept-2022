import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
    const {user} = useAuthContext();

    return (
        <div className={css.Header}>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'users'}>USERS</NavLink>
            <NavLink to={'posts'}>POSTS</NavLink>
            <NavLink to={'about'}>ABOUT</NavLink>
            {user &&
                <div>
                    {user}
                    <button>LogOut</button>
                </div>
            }
        </div>
    );
};

export {
    Header
};