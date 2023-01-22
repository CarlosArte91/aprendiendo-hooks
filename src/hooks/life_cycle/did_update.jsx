import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTask } from '../../redux/slices/task_slice';

function DidUpdate({ num }) {
	const dispatch = useDispatch();

	const reduxState = useSelector((state) => state.tasks.text);
	const [reactState, setReactState] = useState('estado de react');

	/* El useEffect sin los conchetes, replica el comportamiento de
		ComponentDidUpdate el cual es el método de componentes de clases
		que se ejecuta cada vez que cambie cualquier estado del componente
		incluyendo los estados del store de redux que este usando o cada vez
		que lleguen nuevas props del componente padre.
		Este es ideal para ejecutar acciones con los nuevos estados.
	*/
	useEffect(() => {
		console.log('Ejecutando el equivalente al componentDidUpdate');
	});

	const handleReactState = () => {
		setReactState('cambiando estado de REACT');
	};

	const handleReduxState = () => {
		dispatch(changeTask('cambiando estado de REDUX'));
	};

	return (
		<div>
			<h2>DidUpdate</h2>
			<h2>{num}</h2>
			<p>{reduxState}</p>
			<p>{reactState}</p>
			<div style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '220px'
			}}>
				<button onClick={handleReduxState}>REDUX</button>
				<button onClick={handleReactState}>REACT</button>
			</div>
		</div>
	);
}

export default DidUpdate;
