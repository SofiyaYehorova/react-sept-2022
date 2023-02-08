import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const {selectedComment} = useSelector(state => state.comments);

    const {selectedPost} = useSelector(state => state.posts);

    return (
        <div>
            {selectedComment && selectedComment.name}
            <hr/>
            {selectedPost && selectedPost.body}
        </div>
    );
};

export {
    Header
};