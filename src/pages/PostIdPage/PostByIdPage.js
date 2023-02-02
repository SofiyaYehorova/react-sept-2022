import React from 'react';
import {useParams} from "react-router-dom";

import {PostDetailsById} from "../../components";

const PostByIdPage = () => {

    const {postId} = useParams();


    return (
        <div>
           <PostDetailsById postId={postId}/>
        </div>
    );
};

export {
    PostByIdPage
};