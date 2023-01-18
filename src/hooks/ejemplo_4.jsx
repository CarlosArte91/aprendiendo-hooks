function Ejemplo4(props) {
    return (
        <div>
            <h1>Ejemplo de CHILDREN PROPS</h1>
            <h2>
                nombre: {props.nombre}
            </h2>
            {props.children}
        </div>
    );
}

export default Ejemplo4;