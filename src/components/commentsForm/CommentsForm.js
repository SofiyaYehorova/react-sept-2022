import React from 'react';
import {useForm} from "react-hook-form";

import {commentsService} from "../../services";

const CommentsForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all'});

    const submit = async (data) => {
        await commentsService.addComment(data).then(({data}) => setComments((prevState) => [...prevState, data]))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="name" {...register("name")}/>
            <input type="text" placeholder="body" {...register("body")}/>
            <button>Save</button>
        </form>
    );
}

export {
    CommentsForm
};