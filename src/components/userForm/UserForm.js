import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../services";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all'});

    const submit = async (data) => {
        await usersService.createUsers(data).then(({data}) => setUsers((prevState) => [...prevState, data]))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="name" {...register('name')}/>
            <input type="text" placeholder="username" {...register('username')}/>
            <button>Create</button>
        </form>
    );
};

export {
    UserForm
};