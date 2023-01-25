import React, {useEffect, useState} from 'react';

import {Post} from "../Post/Post";
import {postsService} from "../../services";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getByUserId(userId).then(({data}) => setPosts([...data]));
    }, [userId])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {
    Posts
};