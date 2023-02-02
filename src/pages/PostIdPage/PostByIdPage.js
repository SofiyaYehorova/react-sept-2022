import React from 'react';
import {useLocation, useParams} from "react-router-dom";

import {PostDetailsById} from "../../components";

const PostByIdPage = () => {

    const {postId} = useParams();
    const {state} = useLocation();

    return (
        <div>
            <PostDetailsById postId={postId} state={state}/>
        </div>
    );
};

export {
    PostByIdPage
};