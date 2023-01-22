import { useEffect, useState } from 'react';

function WillUnmount() {
	const [num, setNum] = useState(0);

	const handleNum = () => {
		setNum(num + 1);
	};

	/* El useEffect puede replicar el comportamiento de
		ComponentWillUnmount el cual es el método de componentes de clases
		que se ejecuta justo antes de que el componente desaparezca. Para
		lograr esto, el useEffect debe retornar un callback con el código
		a ejecutar y debe tener el array de dependencias vacio.
		Hay que tener en cuenta que si se coloca código por fuera del return,
		al estar el array de dependencias vacio, dicho código se ejecutará
		tan pronto se monte el componente, aunque el código del return solo
		se ejecutará cuando el componente este por desaparecer.
	*/
	useEffect(() => {
		// console.log('Código afuera');
		return () => {
			console.log('Ejecutando el equivalente a componentWillUnmount');
		};
	}, [])

	return (
		<div>
			<h3>Componente Montado</h3>
			<h4>{num}</h4>
			<button onClick={handleNum}>Aumentar</button>
		</div>
	);
};

export default WillUnmount;
