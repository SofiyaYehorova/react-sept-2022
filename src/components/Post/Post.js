import React from 'react';
import {useDispatch} from "react-redux";

import {postAction} from "../../redux";

const Post = ({post}) => {

    const {id, userId, title, body} = post;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={() => dispatch(postAction.setSelectedPost(post))}>Select</button>
            <button onClick={() => dispatch(postAction.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {
    Post
};