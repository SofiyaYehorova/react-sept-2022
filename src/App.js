import {Comments, CommentsForm} from "./components";
import {useEffect, useState} from "react";
import {commentsService} from "./services";

function App() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div className="App">
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
}

export {
    App
}