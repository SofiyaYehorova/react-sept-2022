import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators";
import {authService} from "../../services";


const LoginPage = () => {
    const {register, handleSubmit, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (userCredential) => {
        try {
            await authService.login(userCredential);
            navigate('/cars')
        } catch (e) {
            if (e.response.status === 401) {
                setError(e.response.data)
            }
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(login)}>
                    <input type="text" placeholder="username" {...register('username')}/>
                    <input type="text" placeholder="password" {...register('password')}/>
                    <button disabled={!isValid}>login</button>
                </form>
            </div>
            {error?.detail && <div>{error.detail}</div>}
        </div>

    );
};

export {
    LoginPage
};