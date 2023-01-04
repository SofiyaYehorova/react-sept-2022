import './App.css';
import Homer from "./components/homer/Homer";
import Bart from "./components/bart/Bart";
import Marge from "./components/marge/Marge";
import Lisa from "./components/lisa/Lisa";
import Maggie from "./components/maggie/Maggie";

function App() {
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

export default App;
