import React from 'react';
import {useDispatch} from "react-redux";
import {commentActions} from "../../redux";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    const dispatch = useDispatch();
    return (
        <div>
            <div>id:{id}</div>
            <div>postId:{postId}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={()=>dispatch(commentActions.setSelectedComment(comment))}>Select</button>
            <button onClick={()=>dispatch((commentActions.getById({id})))}>apiSelect</button>
        </div>
    );
};

export {
    Comment
};