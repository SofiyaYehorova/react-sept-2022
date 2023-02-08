import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentActions} from "../../redux";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const dispatch = useDispatch();
    const {comments, errors, loading} = useSelector(state => state.comments);

    useEffect(() => {
        dispatch(commentActions.getAll())
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            {errors && JSON.stringify(errors)}
            {loading && <h2>Loading......</h2>}
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}

export {
    Comments
};