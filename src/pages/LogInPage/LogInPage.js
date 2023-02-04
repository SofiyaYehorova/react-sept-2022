import React, {useRef} from 'react';
import {useAuthContext} from "../../hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LogInPage = () => {
    const username = useRef();
    const navigate = useNavigate();
    const {state} = useLocation();

    const {logIn} = useAuthContext();
    const login = () => {
        logIn(username.current.value)
        navigate(state.pathname, {replace: true})
    }

    return (
        <div>
            <input type="text" placeholder={'username'} ref={username}/>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};

export {
    LogInPage
};