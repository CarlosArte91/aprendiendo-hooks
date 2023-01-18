import { useEffect, useRef, useState } from "react";

function Ejemplo2() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const myRef = useRef();

    const handleCount1 = () => {
        setCount1(count1 + 1);
    }

    const handleCount2 = () => {
        setCount2(count2 + 1);
    }

    // // Case one
    // useEffect(() => {
    //     console.log('CAMBIO EL ESTADO DE ALGUN COMPONENTE');
    //     console.log('Referencia a elemento del DOM');
    //     console.log(myRef);
    // })

    // Case two
    useEffect(() => {
        console.log('CAMBIO EL ESTADO DE ALGUN COUNTER 2');
        console.log('Referencia a elemento del DOM');
        console.log(myRef);
    }, [count2])

    return (
        <div>
            <h1>***** Ejemplo useState, useRef y useEffect *******</h1>
            <h2>{count1}</h2>
            <h2>{count2}</h2>
            <h4 ref={myRef} >Ejemplo de elemento referenciado</h4>
            <div>
                <button onClick={handleCount1} >Counter 1</button>
                <button onClick={handleCount2} >Counter 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;