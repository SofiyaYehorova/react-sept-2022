import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {userService} from "../../services";
import {registerValidator} from "../../validators";

const RegisterPage = () => {
    const {register, handleSubmit, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(registerValidator)
    });
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const registerUser = async (user) => {
        try {
            await userService.create(user)
            navigate('/login')
        } catch (e) {
            setError(e.response.data)
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type="text" placeholder="username" {...register('username')}/>
                    <input type="text" placeholder="password" {...register('password')}/>
                    <button disabled={!isValid}>register</button>
                </form>
            </div>
            <div>
                {error?.detail && <div>{error.detail}</div>}
            </div>
        </div>

    );
};

export {
    RegisterPage
};