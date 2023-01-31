import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = ({comments}) => {

    return (
        <div>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};


export {
    Comments
};