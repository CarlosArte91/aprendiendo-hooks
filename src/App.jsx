import './App.css';
import Ejemplo1 from './hooks/ejemplo_1';
import Ejemplo2 from './hooks/ejemplo_2';
import Ejemplo6 from "./hooks/ejemplo_6"
import DidMount from './hooks/life_cycle/did_mount';
import DidUpdate from './hooks/life_cycle/did_update';

function App() {
  return (
    <div className="App">
      <div>
				<DidUpdate />
      </div>
    </div>
  )
}

export default App
