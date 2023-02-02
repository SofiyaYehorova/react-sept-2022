import React, {useEffect, useState} from 'react';

import {postsService} from "../../services";

import css from './PostDetailsById.module.css'

const PostDetailsById = ({postId, state}) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost({...state})
        } else {
            postsService.getPostsById(postId).then(({data}) => setPost(data))
        }
    }, [postId]);

    return (
        <div className={css.PostDetailsById}>
            <h2>Post Id</h2>
            {post &&
                <>
                    <div>userId:{post.userId}</div>
                    <div>id:{post.id}</div>
                    <div>title:{post.title}</div>
                    <div>body:{post.title}</div>
                </>

            }
        </div>
    );
};

export {
    PostDetailsById
};