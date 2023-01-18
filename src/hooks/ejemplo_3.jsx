import { createContext, useContext, useState } from "react"

const myContext = createContext(null);

function Componente1() {
    const state = useContext(myContext);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2 />
        </div>
    );
}

function Componente2() {
    const state = useContext(myContext);

    return (
        <div>
            <h2>La sesión es: {state.session}</h2>
        </div>
    );
}

function ComponenteConContexto() {
    const initialState = {
        token: '1234567',
        session: 1
    }

    const [sessionData, setSessionData] = useState(initialState);

    const handleSession = () => {
        setSessionData({
            token: '7896577www',
            session: sessionData.session + 1
        })
    }

    return (
        <myContext.Provider value={sessionData} >
            <Componente1 />
            <button onClick={handleSession} >Actualizar session</button>
        </myContext.Provider>
    );
}

export default ComponenteConContexto;
