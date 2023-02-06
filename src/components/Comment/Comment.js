import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {id, postId, name, email, body} = this.props.comment;
        return (
            <div>
                <div>id:{id}</div>
                <div>postId:{postId}</div>
                <div>name:{name}</div>
                <div>email:{email}</div>
                <div>body:{body}</div>
            </div>
        )
    }
}

export {
    Comment
};