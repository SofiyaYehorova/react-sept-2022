import './App.css';
import {Homer} from "./components/Homer/Homer";
import {Bart} from "./components/Bart/Bart";
import {Marge} from "./components/Marge/Marge";
import {Lisa} from "./components/Lisa/Lisa";
import {Maggie} from "./components/Maggie/Maggie";

 export const App=()=> {
  return (
    <div className="App">
<h1>
  Simpsons family
</h1>
        <div className="Simpsons">
            <Homer/>
            <Marge/>
            <Bart/>
            <Lisa/>
            <Maggie/>
        </div>
    </div>
  );
}
