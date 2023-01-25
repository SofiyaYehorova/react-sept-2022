import {useState} from "react";

import {Posts, Users} from "./components";

import style from './App.css';

function App() {
    let [userId, setUserId] = useState(null);

    return (
        <div className="App">
            <div className="Users">
                <Users setUserId={setUserId}/>
            </div>
           <div className="Post">
               {userId && <Posts userId={userId}/>}
           </div>

        </div>
    );
}

export {App};
