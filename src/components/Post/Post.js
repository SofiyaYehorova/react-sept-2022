import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, postId, title} = post;
    const navigate = useNavigate();

    return (
        <div>
            <div>id:{id}</div>
            <div>postId:{postId}</div>
            <div>title:{title}</div>
            {/*<Link to={id.toString()} state={{...post}}>Details</Link>*/}
            <button onClick={() => navigate(id.toString(), {state: post})}>Details</button>
        </div>
    );
};

export {
    Post
};