import Ejemplo4 from "./hooks/ejemplo_4"

function App() {
  return (
    <div className="App">
      <div>
        <Ejemplo4 nombre={'Carlos Cruz'} >
          <h3>Yo soy el hijo</h3>
          <h1>yo soy otro ejemplo</h1>
        </Ejemplo4>
      </div>
    </div>
  )
}

export default App
