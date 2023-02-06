import {useState} from "react";

import {ClassComponent} from "./components/ClassComponent";
import {FunctionComponent} from "./components/FunctionComponent";

function App() {
    const [flag, setFlag] = useState(true);
    return (
        <div className="App">
            {/*{flag && <ClassComponent name={'max'}/>}*/}
            {flag && <FunctionComponent name={'max'}/>}
            <button onClick={() => setFlag(prev => !prev)}>hide</button>
        </div>
    );
}

export {
    App
}