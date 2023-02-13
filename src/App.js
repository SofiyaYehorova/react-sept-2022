import {Cars, Form} from "./components";
import {useSelector} from "react-redux";

function App() {
    const {loading} = useSelector(state => state.cars);
    return (
        <div className="App">
            <Form/>
            <hr/>
            {loading &&
                <div><h2>Loading..........</h2></div>}
            <Cars/>
        </div>
    );
}

export {
    App
}