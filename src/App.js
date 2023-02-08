import {Comments, Header, Posts} from "./components";

import css from './stylesApp/App.module.css'

function App() {
    return (
        <div>

            <Header/>
            <hr/>
            <div className={css.App}>
                <Comments/>
                <Posts/>
            </div>

        </div>
    );
}

export {
    App
}